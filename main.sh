#!/bin/sh -ve

WORKDIR=/srv
GIT_REPO=https://gitlab.com/LIDSoL/lidsol.gitlab.io.git

apk add --quiet --update --no-cache git make hugo

test -e ${WORKDIR}/.git || \
  git clone ${GIT_REPO} ${WORKDIR}

if [ -e ${WORKDIR}/Makefile ]
then
  make init run -C ${WORKDIR}
else
  ${SHELL}
fi

