from bs4 import BeautifulSoup
import os

def getHtmlFiles():
  result = []
  for root, dirs, files in os.walk("public"):
    for f in files:
        if f.endswith(".html"):
          result.append(os.path.join(root, f))
  return result

pages = [
  'public/index.html',
  'public/info/index.html',
  'public/flights/index.html',
  'public/embed/index.html'
]

canonicalHead = None
for filepath in pages:
  with open(filepath, "r") as f:
    htmlContents = f.read()
  soup = BeautifulSoup(htmlContents, 'html.parser')
  if not canonicalHead:
    canonicalHead = str(soup.head)
    canonicalHead = canonicalHead[:canonicalHead.index("<!--========== page-specific files ==========-->")]
  head = str(soup.head)
  head = head[:head.index("<!--========== page-specific files ==========-->")]
  assert head == canonicalHead, 'mean head differs with ' + filepath

  #print(soup.head)


  
