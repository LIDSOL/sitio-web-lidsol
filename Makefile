SHELL=/bin/sh

PORT=1313
WORKDIR=/srv
TEST_SCRIPT=main.sh

test:	${TEST_SCRIPT}
	docker run -it \
	  -p ${PORT}:${PORT} \
	  -v "$(CURDIR):${WORKDIR}" \
	  alpine:latest \
	  ${WORKDIR}/${TEST_SCRIPT}

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

