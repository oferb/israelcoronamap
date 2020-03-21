import csv
import json
import time
import sys
from datetime import date, datetime, timedelta, timezone
import googlemaps
import os


def extractDate():
  dates = {}
  keys = ['0%d/03', '%d/03', '0%d/3', '%d/3']
  keys += [x + '/20' for x in keys] + [x + '/2020' for x in keys]
  keys += [x.replace('/', '.') for x in keys]

  for day in range(1, 32):
    for key in keys:
      formattedDate = '%d/03/2020' % day
      dates[key % day] = formattedDate

      # print('%d/03' % day)
  contents = []
  with open('data-gen/data.txt', newline='') as f:
    contents = f.read()
  for line in contents.splitlines():
    matches = set()
    for key in dates.keys():
      if (key in line):
        matches.add(dates[key])
    filteredMatches = []
    for match in matches:
      if len([m for m in matches if match in m]) == 1:
        filteredMatches.append(match)
    if len(filteredMatches) == 1:
      formattedDate = '0' + filteredMatches[0]
      formattedDate = formattedDate[-10:]
      print(formattedDate)
    else:
      print()

def extractTime():
  times = {}
  keys = ['%d:%d', '0%d:%d']

  for key in keys:
    for hour in range(0, 24):
      for minute in range(0, 60):
        
        if (minute == 0):
          formattedTime = '%d:00' % (hour)
          times[key % (hour, 0) + '0'] = formattedTime
        else:
          formattedTime = '%d:%d' % (hour, minute)
          times[key % (hour, minute)] = formattedTime

      # print('%d/03' % day)
  contents = []
  with open('data-gen/data.txt', newline='') as f:
    contents = f.read()
  for line in contents.splitlines():
    matches = set()
    for key in sorted(times.keys()):
      if (key in line):
        matches.add(times[key])
    filteredMatches = []
    for match in sorted(matches):
      if len([m for m in matches if match in m]) == 1:
        formattedTime = '0' + match
        formattedTime = formattedTime[-5:]
        filteredMatches.append(formattedTime)
    

    if (len(filteredMatches) == 1):
      print(filteredMatches[0])
    elif (len(filteredMatches) == 2):
      t0 = filteredMatches[0]
      t1 = filteredMatches[1]
      h0 = time.strptime(t0, "%H:%M").tm_hour
      h1 = time.strptime(t1, "%H:%M").tm_hour
      if (h1 > h0 | h1 < 4):
        print('%s\t%s' % (t1, t0))
      else:
        print('%s\t%s' % (t0, t1))
    else:
      print('00:00\t23:59')


def extractLocation():
  gmaps = googlemaps.Client(key=os.environ['TOKEN'])
  
  with open('data-gen/locations.txt', newline='') as f:
    contents = f.read()
  for line in contents.splitlines():
    geocode_result = gmaps.geocode(line)
    if geocode_result:
      location = geocode_result[0]['geometry']['location']
      print('%s, %s' % (location['lat'], location['lng']))
    else:
      print()



def fixLoc():
  contents = []
  with open('data-gen/data.txt', newline='') as f:
    contents = f.read()
  for line in contents.splitlines():
    split = line.split(", ")
    if len(split) == 2:
      print(split[1].strip() + ", " + split[0].strip())
    else:
      print(line)


fixLoc()
