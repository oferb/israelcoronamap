 #!/usr/bin/env bash

set -ex

python3 data-gen/process.py
git add public/data/data.csv
git add public/data/data.json
git commit -m 'Data update'
git push
firebase deploy --project coronavirus-il