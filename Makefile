SHELL=/bin/bash

PORT=1313
WORKDIR=/srv
TEST_SCRIPT=test.sh

test:	${TEST_SCRIPT}
	docker run -it \
	  -p ${PORT}:${PORT} \
	  -v "$(shell pwd)/${TEST_SCRIPT}:${WORKDIR}/${TEST_SCRIPT}" \
	  alpine:latest \
	  ${WORKDIR}/${TEST_SCRIPT}
