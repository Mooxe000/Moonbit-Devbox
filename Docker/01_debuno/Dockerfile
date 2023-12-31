FROM mooxe/gotask

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y unzip

RUN mkdir -p /app

WORKDIR /app

ENV DENO_VERSION 1.38.1
# https://github.com/denoland/deno/releases
RUN axel -k \
    https://download.fastgit.org/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
&&  unzip deno-x86_64-unknown-linux-gnu.zip \
&&  rm deno-x86_64-unknown-linux-gnu.zip \
&&  mv ./deno /usr/local/bin

ENV BUN_VERSION 1.0.11
# https://github.com/oven-sh/bun/releases
RUN axel -k \
    https://download.fastgit.org/oven-sh/bun/releases/download/bun-v${BUN_VERSION}/bun-linux-x64.zip \
&&  unzip bun-linux-x64.zip \
&&  rm bun-linux-x64.zip \
&&  mv ./bun-linux-x64/bun /usr/local/bin/ \
&&  rmdir bun-linux-x64

ENV WATCHMAN_VERSION 2023.11.13.00
# https://github.com/facebook/watchman/releases
RUN axel -k \
    https://download.fastgit.org/facebook/watchman/releases/download/v${WATCHMAN_VERSION}/watchman-v${WATCHMAN_VERSION}-linux.zip \
&&  unzip watchman-v${WATCHMAN_VERSION}-linux.zip \
&&  rm watchman-v${WATCHMAN_VERSION}-linux.zip \
&&  mv ./watchman-v${WATCHMAN_VERSION}-linux ./watchman \
&&  mv ./watchman/lib/* /usr/local/lib \
&&  mv ./watchman/bin/* /usr/local/bin \
&&  rm -rf ./watchman

ENV CADDY_VERSION 2.7.5
# https://github.com/caddyserver/caddy/releases
RUN axel -k \
    https://download.fastgit.org/caddyserver/caddy/releases/download/v${CADDY_VERSION}/caddy_${CADDY_VERSION}_linux_amd64.tar.gz \
&&  tar xvf caddy_${CADDY_VERSION}_linux_amd64.tar.gz \
&&  mv caddy /usr/local/bin/ \
&&  rm ./*

ENV LIBSSL_VERSION 1.1_1.1.1n-0+deb11u5
RUN axel -k \
    http://security.debian.org/debian-security/pool/updates/main/o/openssl/libssl${LIBSSL_VERSION}_amd64.deb \
&&  dpkg -i libssl${LIBSSL_VERSION}_amd64.deb \
&&  rm libssl${LIBSSL_VERSION}_amd64.deb

ENV FNM_VERSION=1.35.1
# https://github.com/Schniz/fnm/releases
RUN axel -k \
    https://download.fastgit.org/Schniz/fnm/releases/download/v${FNM_VERSION}/fnm-linux.zip \
&&  unzip fnm-linux.zip \
&&  rm -rf fnm-linux.zip \
&&  chmod +x fnm \
&&  mv fnm /usr/local/bin/fnm
