FROM debian:bookworm-slim

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN mkdir -p /app

WORKDIR /app

RUN apt install -y curl

ARG container_proxy

RUN curl -o ./pkgx --compressed -f --proto '=https' \
    https://pkgx.sh/$(uname)/$(uname -m) \
&&  install -m 755 pkgx /usr/local/bin \
&&  rm pkgx
