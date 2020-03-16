from bs4 import BeautifulSoup
import pytest
import os


os.chdir('..')

def get_html_files():
  result = []
  for root, dirs, files in os.walk('public'):
    for f in files:
        if f.endswith('.html'):
          result.append(os.path.join(root, f))
  return result

def get_file_content(filepath):
  with open(filepath, 'r', encoding='utf-8') as f:
    return f.read()

def get_head(html_contents):
  soup = BeautifulSoup(html_contents, 'html.parser')
  return soup.head

def extract_canonical_head(head):
  head = str(head)
  head = head[:head.index('<!--========== page-specific files ==========-->')]
  return head

# An example of how the head should look like
CANONICAL_HEAD = extract_canonical_head(get_head(get_file_content(os.path.join('public', 'index.html'))))

# Run the test for each html file contains a head tag
@pytest.mark.parametrize('filepath', filter(lambda filepath: get_head(get_file_content(filepath)), get_html_files()))
def test_canonical_head(filepath):
  head = extract_canonical_head(get_head(get_file_content(filepath)))
  assert head == CANONICAL_HEAD, 'mean head differs with ' + filepath
