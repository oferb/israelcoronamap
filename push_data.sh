 #!/usr/bin/env bash

set -ex

while true
do
    python3 loader/loader.py
    git add -A
    git commit -m 'Data update'
    git push
    firebase deploy --project coronavirus-il
    sleep 600
done
