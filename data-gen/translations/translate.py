from sys import argv
import urllib, json
from google.cloud import translate_v2 as translate

# Set GOOGLE_APPLICATION_CREDENTIALS=<google services json>
LANGS = ['ar', 'en']
CLIENT = translate.Client()

def main(targetLang):
  data = []
  with open("../../public/data/data-he.json", newline='') as f:
    data = json.load(f)

  print('%d entries' % len(data))
  translateLabels(data[0:12], targetLang)
  with open("../../public/data/data-{}.json".format(targetLang), 'w') as f:
    json.dump(data, f, indent =2, ensure_ascii=False)
  print('Translated %d entries to %s' % (len(data), targetLang))

def getCache(lang):
  try:
    with open('../../translation_cache_%s.json' % lang, 'r', encoding='utf8') as raw_cache:
      return json.load(raw_cache)
  except FileNotFoundError:
    return {}

def saveCache(targetLang, cache):
  with open('translation_cache_%s.json' % targetLang, 'w', encoding='utf8') as cache_out:
    json.dump(cache, cache_out, indent=2, ensure_ascii=False)

def getManualTranslations(lang):
  try:
    with open('manual_translations_%s.json' % lang, 'r', encoding='utf8') as raw_cache:
      return json.load(raw_cache)
  except FileNotFoundError:
    return {}

def translateLabels(data, targetLang):
  cache = getCache(targetLang)
  manual = getManualTranslations(targetLang)

  for index, entry in enumerate(data):
    label = entry['label']
    entry['label'] = translateLabel(label, targetLang, cache, manual)
    if index % 10 == 0:
      saveCache(targetLang, cache)

def translateLabel(label, dst, cache, manual):
  manualResult = manual.get(label)
  print(label)
  if manualResult:
    print("Using manual " + manualResult)
    return manualResult
  cachedResult = cache.get(label)
  if cachedResult:
    return cachedResult
  result = CLIENT.translate(label, target_language=dst)['translatedText']
  cache.update({label: result})
  print('%s -> %s (%s)' % (label, result, dst))
  return result


if __name__ == "__main__":
  main(LANGS[0])
  #save_cache()
