#!/bin/sh -ve

ALPINE_VERSION="v3.12"
ALPINE_REPO=https://dl-cdn.alpinelinux.org/alpine/${ALPINE_VERSION}/main
ALPINE_FLAGS="--quiet --no-progress"

sed -i'' -e "s/edge/${ALPINE_VERSION}/g" /etc/apk/repositories 
apk ${ALPINE_FLAGS} --update --allow-untrusted -X ${ALPINE_REPO} add alpine-keys
apk ${ALPINE_FLAGS} update
apk ${ALPINE_FLAGS} --no-cache add make git