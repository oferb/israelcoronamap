from bs4 import BeautifulSoup
import prettierfier
import os

def getHtmlFiles():
  result = []
  for root, dirs, files in os.walk("public"):
    for f in files:
        if f.endswith(".html"):
          result.append(os.path.join(root, f))
  return result

for filepath in getHtmlFiles():
  with open(filepath, "r") as f:
    htmlContents = f.read()
  soup = BeautifulSoup(htmlContents, 'html.parser')
  with open(filepath, "w") as f:
    pretty_html = prettierfier.prettify_html(htmlContents)
    f.write(pretty_html)

  
