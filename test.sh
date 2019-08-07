#!/bin/sh -vxe

apk add --quiet --update --no-cache git hugo

git clone https://gitlab.com/LIDSoL/lidsol.gitlab.io.git /opt

cd /opt
echo init update | xargs -r -t -n 1 git submodule

hugo server --verbose --watch --bind=0.0.0.0 --port=1313 

