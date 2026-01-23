ARG HUGO_VERSION=0.62.2
FROM registry.gitlab.com/pages/hugo/hugo_extended:${HUGO_VERSION} AS builder

RUN sed -i'' -e 's/edge/v3.12/g' /etc/apk/repositories && \
    apk --quiet --no-progress --update --allow-untrusted -X https://dl-cdn.alpinelinux.org/alpine/v3.12/main add alpine-keys && \
    apk --quiet --no-progress update && \
    apk --quiet --no-progress --no-cache add make git

WORKDIR /src
COPY . .

RUN git submodule update --init --recursive || true
ENV HUGO_ENABLEGITINFO=false
RUN hugo --ignoreCache --gc

FROM nginx:alpine

COPY --from=builder /src/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
