from flask import Flask
from flask import request
import sys
print(sys.path)
import requests
import wakkaide.network_file
wakkaide.network_file.setup()
import os
print(os.getcwd())

# This is an example of a basic Flask server.
# It runs, and then shuts itself down.
# Feel free to try it for yourself!

app = Flask(__name__)

@app.route("/")
def index():
  # return "hello world"
  f = open('corona/public/index.html', "r")
  return f.read(), 200, {'Content-Type': 'text/html'}

@app.route("/<path:path>")
def get_file(path):
  f = open('corona/public/' + path, "r")
  return f.read(), 200, {'Content-Type': get_content_type(path)}

def get_content_type(path):
  if path.endswith('.html'):
    return 'text/html'
  if path.endswith('.json'):
    return 'application/json'
  if path.endswith('.js'):
    return 'text/javascript'
  if path.endswith('.txt'):
    return 'text/plain'

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5000)
  response = requests.get('http://127.0.0.1:5000')
  print(response)
