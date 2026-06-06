#!/bin/sh
pnpm install --ignore-scripts
pnpm run build
podman rm -f lidsol-react 2>/dev/null || true

mkdir -p build
podman run -d --name lidsol-react -p 8080:80 \
  -v "$(pwd)/build:/usr/share/nginx/html:ro" \
  docker.io/library/nginx:alpine

while inotifywait -r -e modify,create,delete --exclude 'node_modules|build' src/; do
    pnpm run build
done
