import wakkaide.network_file
wakkaide.network_file.setup()
import json
import difflib

EXPECTED_DATA_KEYS = { "id", "lat", "lon", "label", "text", "pat_num", "t_start", "t_end", "pub_date", "pub_ts", "link"}
EXPECTED_POINTS_KEYS = {"position", "label", "description", "t_start", "t_end", "radius", "link"}


def validate(point_list, expected_keys, id_key):
    errors = []

    for point in point_list:
        keys = set(point.keys())
        if keys != expected_keys:
            for extra in keys - expected_keys:
                errors.append('Unexpected key: "{}"'.format(extra))

            for missing in expected_keys - keys:
                errors.append('Missing key "{}" in point with ID {}'.format(missing, point.get(id_key, '<missing id>')))

    return errors


def chop_plus(s):
    pos = s.find('+')
    if pos >= 0:
        s = s[:pos]
    return s


def add_position_string(pt):
    pt['position'] = '(%.5f, %.5f)' % (pt['lon'], pt['lat'])


def convert_data_json(in_json):
    def convert_data_item(in_):
        res = {
            'lat': float(in_['lat']),
            'lon': float(in_['lon']),
            'label': in_['label'],
            'description': in_['text'],
            't_start': chop_plus(in_['t_start']),
            't_end': chop_plus(in_['t_end']),
            'link': in_['link'],
            'pat_num': in_['pat_num'],
            'pub_ts': in_['pub_ts']}
        add_position_string(res)
        return res

    return [convert_data_item(item) for item in in_json]


def convert_points_json(in_json):
    def convert_points_item(in_):
        res = {key: in_[key] for key in ['label', 'description', 't_start', 't_end', 'radius', 'link']}
        res['lat'] = in_['position'][1]
        res['lon'] = in_['position'][0]
        add_position_string(res)
        return res

    return [convert_points_item(item) for item in in_json]


def compare_points(pt1, pt2):
    EPS = 1e-5  # about 1m
    MIN_STRING_SIMILARITY = 0.7

    differences = []

    if abs(pt1['lat'] - pt2['lat']) > EPS or abs(pt1['lon'] - pt2['lon']) > EPS:
        differences.append('position')

    for field in ['label', 't_start', 't_end', 'link']:
        if pt1[field] != pt2[field]:
            differences.append(field)

    for field in ['label', 'description']:
        if pt1[field] and pt2[field] and string_similarity(pt1[field], pt2[field]) < MIN_STRING_SIMILARITY:
            differences.append(field)

    return differences


def string_similarity(str1, str2):
    base_len = max(len(str1), len(str2))
    if min(len(str1), len(str2)) < 5:
        return 0

    matcher = difflib.SequenceMatcher(None, str2, str2)
    common_size = sum(block[2] for block in matcher.get_matching_blocks())
    return common_size / base_len


def remove_multiplicities(points):
    keyed = {}
    for point in points:
        key = (point['position'], point['t_start'], point['t_end'])
        keyed.setdefault(key, []).append(point)

    print('{} multiplicities'.format(len(points) - len(keyed)))
    return [l[0] for l in keyed.values()]


def match_points(pts1, pts2):
    by_position1 = {}
    for pt in pts1:
        by_position1.setdefault(pt['position'], []).append(pt)
    by_position2 = {}
    for pt in pts2:
        by_position2.setdefault(pt['position'], []).append(pt)

    positions1 = set(by_position1.keys())
    positions2 = set(by_position2.keys())
    matched_positions = positions1 & positions2

    unmatched1 = []
    for pos, points in by_position1.items():
        if pos not in matched_positions:
            unmatched1 += points

    unmatched2 = []
    for pos, points in by_position2.items():
        if pos not in matched_positions:
            unmatched2 += points

    matches = []
    for pos in matched_positions:
        pos_pts1 = by_position1[pos][:]
        pos_pts2 = by_position2[pos][:]

        for pt1 in pos_pts1:
            candidates = [(i, pt2) for (i, pt2) in enumerate(pos_pts2)
                          if pt2['t_start'] == pt1['t_start'] and pt2['t_end'] == pt1['t_end']]
            if len(candidates) > 1:
                print('Detected multiplicity between')
                [print('    ' + cand[1]['label']) for cand in candidates]
            for cand in candidates[::-1]:
                del pos_pts2[cand[0]]

            if candidates:
                matches.append((pt1, candidates[0][1]))
            else:
                unmatched1.append(pt1)

        unmatched2 += pos_pts2

    return {'matches': matches, 'unmatched1': unmatched1, 'unmatched2': unmatched2}


def print_differences(matches):
    for pt1, pt2 in matches:
        differences = compare_points(pt1, pt2)
        differences = set(differences) - {'link'}
        if differences:
            print('differences in point "{}"'.format(pt1['label']))
            for dif in differences:
                print('   {}: {} vs {}'.format(dif, pt1[dif], pt2[dif]))


def compare_sets(pts1, pts2):
    matching = match_points(pts1, pts2)

    print('{} points in set 1 only, {} points in set 2 only, {} matched'.format(
        len(matching['unmatched1']), len(matching['unmatched2']), len(matching['matches'])))

    stats = {}
    for pt1, pt2 in matching['matches']:

        differences = compare_points(pt1, pt2)
        for dif in differences:
            stats[dif] = stats.get(dif, 0) + 1

    print_differences(matching['matches'])

    print('difference stats:', stats)

with open('corona/moh_compare/data.json', 'r') as f:
    data_points = f.read()
data_points = json.loads(data_points)
errors = validate(data_points, EXPECTED_DATA_KEYS, 'id')
if errors:
    print('============================ Errors in data.json ===========')
    print(*errors, sep='\n')
data_points = convert_data_json(data_points)
data_points = remove_multiplicities(data_points)

with open('corona/moh_compare/points.json', 'r') as f:
    points_points = json.loads(f.read())
errors = validate(points_points, EXPECTED_POINTS_KEYS, 'label')
if errors:
    print('============================ Errors in points.json ===========')
    print(*errors, sep='\n')
points_points = convert_points_json(points_points)
points_points = remove_multiplicities(points_points)

compare_sets(data_points, points_points)