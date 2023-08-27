FROM mooxe/gotask

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y unzip

RUN mkdir -p /app

WORKDIR /app

ENV DENO_VERSION 1.36.3
# https://github.com/denoland/deno/releases
RUN axel -k \
    https://download.fastgit.org/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
&&  unzip deno-x86_64-unknown-linux-gnu.zip \
&&  rm deno-x86_64-unknown-linux-gnu.zip \
&&  mv ./deno /usr/local/bin

ENV BUN_VERSION 0.8.1
# https://github.com/oven-sh/bun/releases
RUN axel -k \
    https://download.fastgit.org/oven-sh/bun/releases/download/bun-v${BUN_VERSION}/bun-linux-x64.zip \
&&  unzip bun-linux-x64.zip \
&&  rm bun-linux-x64.zip \
&&  mv ./bun-linux-x64/bun /usr/local/bin/ \
&&  rmdir bun-linux-x64

ENV WATCHMAN_VERSION 2023.08.14.00
# https://github.com/facebook/watchman/releases
RUN axel -k \
    https://download.fastgit.org/facebook/watchman/releases/download/v${WATCHMAN_VERSION}/watchman-v${WATCHMAN_VERSION}-linux.zip \
&&  unzip watchman-v${WATCHMAN_VERSION}-linux.zip \
&&  rm watchman-v${WATCHMAN_VERSION}-linux.zip \
&&  mv ./watchman-v${WATCHMAN_VERSION}-linux ./watchman \
&&  mv ./watchman/lib/* /usr/local/lib \
&&  mv ./watchman/bin/* /usr/local/bin \
&&  rm -rf ./watchman

# https://github.com/caddyserver/caddy/releases
RUN axel -k \
    https://download.fastgit.org/caddyserver/caddy/releases/download/v2.7.4/caddy_2.7.4_linux_amd64.tar.gz \
&&  tar xvf caddy_2.7.4_linux_amd64.tar.gz \
&&  mv caddy /usr/local/bin/ \
&&  rm ./*

RUN axel -k \
    http://security.debian.org/debian-security/pool/updates/main/o/openssl/libssl1.1_1.1.1n-0+deb11u5_amd64.deb \
&&  dpkg -i libssl1.1_1.1.1n-0+deb11u5_amd64.deb \
&&  rm libssl1.1_1.1.1n-0+deb11u5_amd64.deb
