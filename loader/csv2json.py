import csv
import json
from datetime import date, datetime, timedelta, timezone


# Merges points in the same location and adds a nice HTML description
def merge_points_original(points):
    visit_dict = {}
    for point in points:
        pos = tuple(point['position'])
        if pos not in visit_dict:
            visit_dict[pos] = [point]
        else:
            visit_dict[pos].append(point)

    result = []

    for points in visit_dict.values():
        point = dict(points[0])
        point['description'] += '<br><br><b>שעות ביקור:</b><br>'

        for p_ in points:
            point['description'] += '<li>' + _textulize_visit_datetime(p_)

        result.append(point)

    return result

def _textulize_visit_datetime(point):
    start = point['t_start']
    end = point['t_end']
    dt_start = datetime.fromisoformat(start)
    dt_end = datetime.fromisoformat(end)
    return '%s בין השעות %s-%s' % (dt_start.strftime('%d/%m'), dt_start.strftime('%H:%M'), dt_end.strftime('%H:%M'))