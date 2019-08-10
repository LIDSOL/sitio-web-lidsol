SHELL=/bin/bash

PORT=1313
WORKDIR=/srv
TEST_SCRIPT=test.sh

test:	${TEST_SCRIPT}
	docker run -it \
	  -p ${PORT}:${PORT} \
	  -v "$(shell pwd):${WORKDIR}" \
	  alpine:latest \
	  ${WORKDIR}/${TEST_SCRIPT}

