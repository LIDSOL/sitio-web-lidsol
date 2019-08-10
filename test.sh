#!/bin/sh -vxe

apk add --quiet --update --no-cache git hugo

test -e /srv/.git || git clone https://gitlab.com/LIDSoL/lidsol.gitlab.io.git /srv

cd /srv
echo init update | xargs -r -t -n 1 git submodule

hugo server --verbose --watch --bind=0.0.0.0 --port=1313 

