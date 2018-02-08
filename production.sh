#! bin/bash

# @penserbjorne

echo "Eliminando archivos ..."
rm -rf /var/html/html/*

echo "Copiando archivos ..."
cp -r ./ /var/www/html
