 #!/usr/bin/env bash

set -ex

python3 data-gen/process.py
git add -A
git commit -m 'Data update'
git push
firebase deploy --project coronavirus-il