import json
from datetime import datetime, timedelta
import time

import requests

import json

URL = 'https://services5.arcgis.com/dlrDjz89gx9qyfev/ArcGIS/rest/services/Corona_Exposure_View/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='
def load():
    outputData = []
    inputData = []
    resp = requests.get(URL)
    inputData = json.loads(resp.content)
    
    for i, p in enumerate(inputData['features']):
        x, y = p['geometry']['coordinates'][0], p['geometry']['coordinates'][1]
        point = {"id": p['id'],
                 "lat": y,
                 "lon": x,
                 "label": p['properties']['Place'],
                 "text": '',
                 "stayTimes": p['properties']['stayTimes'],
                 "t_start": (datetime.fromtimestamp(p['properties']['fromTime'] / 1000) - timedelta(hours=2)).isoformat(),
                 "t_end": (datetime.fromtimestamp(p['properties']['toTime'] / 1000) - timedelta(hours=2)).isoformat(),
                 "link": ''}
        if 'קו אוטובוס' not in (p['properties']['Comments'] or '') and 'אוטובוס' not in (p['properties']['Place'] or ''):
            outputData.append(point)
        else:
            pass


    print('Total', len(outputData))
    if (len(outputData) > 100):
        currentTime = round(time.time())
        outputData = {'points': outputData, 'update_time': currentTime}

        with open('public/data/data-he.json', 'w') as f:
            json.dump(outputData, f, indent = 2, ensure_ascii=False)

        with open('public/data/data-ar.json', 'w', encoding='utf-8') as f:
            json.dump(outputData, f, ensure_ascii=False, indent=2)

        with open('public/data/data-en.json', 'w', encoding='utf-8') as f:
            json.dump(outputData, f, ensure_ascii=False, indent=2)
    else:
        print("Error: Less than 100 points in data")


load()