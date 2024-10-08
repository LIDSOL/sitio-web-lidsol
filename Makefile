#!/usr/bin/make -f

IMAGE_NAME=lidsol.org/web
IMAGE_TAG=0.62.2
PORT=1313

init:	.gitmodules
	echo init update | \
	  xargs -t -n 1 git submodule
	docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" ./container/

run:
	docker run -it \
	  -p ${PORT}:1313 \
	  -v "$(CURDIR):/srv:Z" \
	  ${IMAGE_NAME}:${IMAGE_TAG}

build:
	docker run \
	  -p ${PORT}:1313 \
	  -v "$(CURDIR):/srv:Z" \
	  ${IMAGE_NAME}:${IMAGE_TAG} \
	  hugo
