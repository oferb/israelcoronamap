import datetime
import json
import urllib.request

OUTPUT_FILE = 'data.json'
CORONA_DATA_URL = "https://gis.health.gov.il/arcgis/rest/services/CoronaExposureSites/MapServer/0/query?f=json&where=(ID%20%3C%3E%20%27XXXX%27)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometryType=esriGeometryEnvelope&outFields=*"

with urllib.request.urlopen(CORONA_DATA_URL) as response:
    corona_exposures_sites_query_data = json.loads(response.read().decode('utf-8'))

output_set = []
for node in corona_exposures_sites_query_data["features"]:
    case = node['attributes']
    pos = node['geometry']
    
    output_set.append({"lat": pos["y"],
    "lon": pos["x"],
    "label": case["Place"],
    "text": case["Name"],
    "pat_num": case["ID"],
    "t_start": str(datetime.datetime.fromtimestamp(case["fromTime"]/1000)),
    "t_end": str(datetime.datetime.fromtimestamp(case["toTime"]/1000)),
    "pub_date": "",
    "pub_ts": case["Date"],
    "link": ""})

with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
    json.dump(output_set, outfile, ensure_ascii=False, indent=4)
