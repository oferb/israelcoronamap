import json
from sys import argv

def main():
	lang = argv[1]
	src_path = argv[2]
	try:
		with open('data%s.json' % lang, 'r', encoding='utf8') as infile:
			source = json.load(infile)
	except FileNotFoundError:
		print('Existing translation not found at data%s.json, the file will be created.' % lang)
		source = []
	try:
		with open('translation_cache_%s.json' % lang, 'r', encoding='utf8') as incache:
			cache = json.load(incache)
	except FileNotFoundError:
		print('Existing cache not found at translation_cache_%s.json, a new cache will be created.' % lang)
		cache = dict()

	new = []
	with open(src_path, 'r', encoding='utf8') as new_translations:
		new = json.load(new_translations)

	for entry in new:
		_id, label = entry['id'], entry['label']
		cache[_id] = label
		find_entry_by_id(source, _id)['label'] = label

	with open('data%s.json' % lang, 'w', encoding='utf8') as data_out:
		json.dump(source, data_out, ensure_ascii=False)
	with open('translation_cache_%s.json' % lang, 'w', encoding='utf8') as cache_out:
		json.dump(cache, cache_out, ensure_ascii=False)
	
	try:
		with open('updated.json', 'r', encoding='utf8') as langlist:
			languages = json.load(langlist)
			if lang not in languages:
				languages.append(lang)
	except FileNotFoundError:
		languages = [lang]
	with open('updated.json', 'a+', encoding='utf8') as langlist:
		json.dump(languages, langlist, ensure_ascii=False)
			

def find_entry_by_id(data, _id):
	for entry in data:
		if entry['id'] == _id:
			return entry

if __name__ == '__main__':
	main()
