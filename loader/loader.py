import json
from datetime import datetime, timedelta

import requests

import csv2json


def load():
    points = []
    resp = requests.get(
        'https://services5.arcgis.com/dlrDjz89gx9qyfev/arcgis/rest/services/Corona_Exposure_View/FeatureServer/0/query?f=json'
        '&where=1%3D1'
        '&returnGeometry=true'
        '&spatialRel=esriSpatialRelIntersects'
        '&outFields=*'
        '&maxRecordCountFactor=4'
        '&outSR=4326'
        '&resultOffset=0'
        '&resultRecordCount=8000&cacheHint=true')
    j = resp.json()
    for i, p in enumerate(j['features']):
        x, y = p['geometry']['x'], p['geometry']['y']
        point = {"position": (x, y),
                 "label": p['attributes']['Place'],
                 "description": (p['attributes']['Name'] or '') + '<br>' + (p['attributes']['Comments'] or ''),
                 "t_start": (datetime.fromtimestamp(p['attributes']['fromTime'] / 1000) - timedelta(hours=2)).isoformat(),
                 "t_end": (datetime.fromtimestamp(p['attributes']['toTime'] / 1000) - timedelta(hours=2)).isoformat(),
                 "radius": 15,
                 "link": ''}
        if 'קו אוטובוס' not in (p['attributes']['Comments'] or '') and 'אוטובוס' not in (p['attributes']['Place'] or ''):
            points.append(point)
            print(p['attributes']['Place'], i)
        else:
            print('Ignoring:')
            print(p['attributes']['Place'], i)


    print('total', len(points))

    merged_points = csv2json.merge_points_original(points)

    with open('points.json', 'w') as f:
        json.dump(points, f)

    with open('merged_points.json', 'w') as f:
        json.dump(merged_points, f)

load()