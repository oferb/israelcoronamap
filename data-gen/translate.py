from google.cloud import translate_v2 as translate
translate_client = translate.Client()

result = translate_client.translate(text, target_language='he')
>>> result['translatedText']
'שלום לך'
>>> text = 'שלום לך'
>>> result = translate_client.translate(text, target_language='en')
>>> result['translatedText']
