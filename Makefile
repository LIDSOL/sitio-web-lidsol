SHELL=/bin/sh

PORT=1313
WORKDIR=/srv
ENTRYPOINT=${WORKDIR}/entrypoint.sh
IMAGE=registry.gitlab.com/pages/hugo/hugo_extended
TAG=0.62.2

test:	${TEST_SCRIPT}
	docker run -it \
	  -p ${PORT}:${PORT} \
	  -v "$(CURDIR):${WORKDIR}" \
	  ${IMAGE}:${TAG} \
	    ${ENTRYPOINT}

init:	.gitmodules
	echo init update | \
	  xargs -t -n 1 git submodule

run:	init
	hugo server \
	  --verbose \
	  --watch \
	  --bind=0.0.0.0 \
	  --port=1313 \
	  --appendPort=false \
	  --baseURL="/" \
	  --buildDrafts \
	  --disableFastRender \
	;

