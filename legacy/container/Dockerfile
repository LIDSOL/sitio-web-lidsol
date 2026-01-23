# Containerfile for web-page builder for LIDSoL

# Image information
ARG IMAGE=registry.gitlab.com/pages/hugo/hugo_extended
ARG TAG=0.62.2

FROM ${IMAGE}:${TAG}

COPY ./build.sh /build.sh
RUN /build.sh

WORKDIR /srv

VOLUME [ "/srv" ]
EXPOSE 1313

CMD hugo server \
	  --verbose \
	  --watch \
	  --bind=0.0.0.0 \
	  --port=1313 \
	  --appendPort=false \
	  --baseURL="/" \
	  --buildDrafts \
	  --disableFastRender
