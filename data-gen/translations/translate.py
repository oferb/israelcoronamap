from sys import argv
import urllib, json
from google.cloud import translate_v2 as translate

try:
	with open('translation_cache_%s.json' % argv[2], 'r', encoding='utf8') as raw_cache:
		cache = json.load(raw_cache)
except FileNotFoundError:
	cache = {}

def main(src, dst):
	src_url = "https://raw.githubusercontent.com/oferb/israelcoronamap/master/public/data/data%s.json" % src
	dst_name = "data{}.json".format(dst)
	src, dst = src.lower(), dst.lower()
	data = get_data(src_url)
	print('Received %d entries' % len(data))
	translate_labels(data, src, dst)
	with open(dst_name, 'w') as outfile:
		json.dump(data, outfile, ensure_ascii=False)
	print('Translated %d entries to %s' % (len(data), dst_name))
	

def translate_labels(data, src, dst):
	t = translate.Client()
	for index, entry in enumerate(data):
		_id, label = entry['id'], entry['label']
		entry['label'] = translate_label(_id, label, dst, t)
		if index % 10 == 0:
			save_cache()

def translate_label(_id, label, dst, client):
	cached_result = cache.get(_id)
	if cached_result:
		return cached_result
	result = client.translate(label, target_language=dst)['translatedText']
	cache.update({_id: result})
	print('%s -> %s (%s)' % (label, result, dst))
	return result

def get_data(url):
	data = None
	with urllib.request.urlopen(url) as resp:
		data = json.loads(resp.read().decode('utf-8'))
	return data

def save_cache():
	with open('translation_cache_%s.json' % argv[2], 'w', encoding='utf8') as cache_out:
		json.dump(cache, cache_out, ensure_ascii=False)

if __name__ == "__main__":
	src, dst = argv[1], argv[2]
	main(src, dst)
	save_cache()
