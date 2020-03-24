import csv
import json
from datetime import date, datetime, timedelta, timezone

def getPoints(language):
    points = []
    labelName = 'label ' + language
    descriptionName = 'description ' + language
    with open('public/data/data.csv', newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            place_name = row[labelName].strip()
            if not place_name:
                place_name = row['label hebrew'].strip()
            location = row['position'].split(',')
            lat = float(location[0].strip())
            lon = float(location[1].strip())
            date = row['date'].strip()
            t_start = row['start time'].strip()
            t_end = row['end time'].strip()
            start_time = datetime.strptime(
                date + " " + t_start, '%d/%m/%Y %H:%M')
            end_time = datetime.strptime(date + " " + t_end, '%d/%m/%Y %H:%M')
            description = row[descriptionName].strip()
            if not description:
                description = row['description hebrew'].strip()            
            link = row['link'].strip()
            publication_time = ''
            if 'www.health.gov.il' in link:
                publication_time = datetime.strptime(link[63:69], '%d%m%y')
            else:
                publication_time = datetime.strptime(row['pub_date'].strip(), '%d%m%y')
            points.append({"id": row['ID'],
                            "lat": lat,
                            "lon": lon,
                            "label": place_name,
                            "text": description,
                            "pat_num": row['patient_number'],
                            "t_start": start_time.isoformat() + '+02:00',
                            "t_end": end_time.isoformat() + '+02:00',
                            "pub_date": publication_time.strftime('%d/%m'),
                            "pub_ts": int(publication_time.timestamp()),
                            "link": link})
    return points

with open('public/data/data-he.json', 'w', encoding='utf-8') as f:
    json.dump(getPoints('hebrew'), f, ensure_ascii=False, indent=4)

with open('public/data/data-ar.json', 'w', encoding='utf-8') as f:
    json.dump(getPoints('arabic'), f, ensure_ascii=False, indent=4)

with open('public/data/data-en.json', 'w', encoding='utf-8') as f:
    json.dump(getPoints('english'), f, ensure_ascii=False, indent=4)
