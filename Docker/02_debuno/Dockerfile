FROM gcc

WORKDIR /root

# https://github.com/eradman/entr
RUN curl -O https://eradman.com/entrproject/code/entr-5.5.tar.gz \
&&  tar -xzf entr-5.5.tar.gz \
&&  cd entr-5.5 \
&&  ./configure \
&&  make test

FROM mooxe/gotask

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y unzip xz-utils

RUN mkdir -p /app

WORKDIR /app

ARG container_proxy

ARG DENO_RELEASE_URL=https://github.com/denoland/deno/releases
ARG DENO_VERSION=1.44.2
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${DENO_RELEASE_URL}/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
&&  unzip deno-x86_64-unknown-linux-gnu.zip \
&&  rm deno-x86_64-unknown-linux-gnu.zip \
&&  mv ./deno /usr/local/bin

ARG BUN_RELEASE_URL=https://github.com/oven-sh/bun/releases
ARG BUN_VERSION=1.1.12
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${BUN_RELEASE_URL}/download/bun-v${BUN_VERSION}/bun-linux-x64.zip \
&&  unzip bun-linux-x64.zip \
&&  rm bun-linux-x64.zip \
&&  mv ./bun-linux-x64/bun /usr/local/bin/ \
&&  rmdir bun-linux-x64

# RUN apt-get install -y curl
# curl -fsSL
# RUN \
#     curl -fsSL https://apt.cli.rs/pubkey.asc | tee -a /usr/share/keyrings/rust-tools.asc \
# &&  curl -fsSL https://apt.cli.rs/rust-tools.list | tee /etc/apt/sources.list.d/rust-tools.list \
# &&  apt update \
# &&  apt show watchexec

COPY --from=0 /root/entr-5.5/entr /usr/local/bin/entr

ARG WE_RELEASE_URL=https://github.com/watchexec/watchexec/releases
ARG WE_VERSION=2.1.0
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${WE_RELEASE_URL}/download/v${WE_VERSION}/watchexec-${WE_VERSION}-x86_64-unknown-linux-musl.tar.xz \
&&  tar xvf watchexec-${WE_VERSION}-x86_64-unknown-linux-musl.tar.xz \
&&  cp ./watchexec-${WE_VERSION}-x86_64-unknown-linux-musl/watchexec /usr/local/bin/watchexec \
&&  rm -rf ./watchexec-${WE_VERSION}-x86_64-unknown-linux-musl*

# ENV WATCHMAN_VERSION 2024.03.25.00
# # https://github.com/facebook/watchman/releases
# RUN axel -k \
#     https://mirror.ghproxy.com/https://github.com/facebook/watchman/releases/download/v${WATCHMAN_VERSION}/watchman-v${WATCHMAN_VERSION}-linux.zip \
# &&  unzip watchman-v${WATCHMAN_VERSION}-linux.zip \
# &&  rm watchman-v${WATCHMAN_VERSION}-linux.zip \
# &&  mv ./watchman-v${WATCHMAN_VERSION}-linux ./watchman \
# &&  mv ./watchman/lib/* /usr/local/lib \
# &&  mv ./watchman/bin/* /usr/local/bin \
# &&  rm -rf ./watchman

# miniserve
ARG MINISERVE_RELEASE_URL=https://github.com/svenstaro/miniserve/releases
ARG MINISERVE_VERSION=0.27.0
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${MINISERVE_RELEASE_URL}/download/v${MINISERVE_VERSION}/miniserve-${MINISERVE_VERSION}-x86_64-unknown-linux-gnu \
&&  chmod +x ./miniserve-${MINISERVE_VERSION}-x86_64-unknown-linux-gnu \
&&  mv ./miniserve-${MINISERVE_VERSION}-x86_64-unknown-linux-gnu /usr/local/bin/miniserve

# # static-web-server
# ENV SWS_VERSION 2.31.0
# # https://github.com/static-web-server/static-web-server/releases
# RUN axel -k \
#     ${PROXY_PREFIX}https://github.com/static-web-server/static-web-server/releases/download/v${SWS_VERSION}/static-web-server-v${SWS_VERSION}-x86_64-unknown-linux-musl.tar.gz \
# &&  tar xvf static-web-server-v${SWS_VERSION}-x86_64-unknown-linux-musl.tar.gz \
# &&  cp ./static-web-server-v${SWS_VERSION}-x86_64-unknown-linux-musl/static-web-server /usr/local/bin/sws \
# &&  rm -rf ./static-web-server-v${SWS_VERSION}-x86_64-unknown-linux-musl*

# ENV CADDY_VERSION 2.7.5
# # https://github.com/caddyserver/caddy/releases
# RUN axel -k \
#     https://download.fastgit.org/caddyserver/caddy/releases/download/v${CADDY_VERSION}/caddy_${CADDY_VERSION}_linux_amd64.tar.gz \
# &&  tar xvf caddy_${CADDY_VERSION}_linux_amd64.tar.gz \
# &&  mv caddy /usr/local/bin/ \
# &&  rm ./*

# ENV LIBSSL_VERSION 1.1_1.1.1n-0+deb11u5
# RUN axel -k \
#     http://security.debian.org/debian-security/pool/updates/main/o/openssl/libssl${LIBSSL_VERSION}_amd64.deb \
# &&  dpkg -i libssl${LIBSSL_VERSION}_amd64.deb \
# &&  rm libssl${LIBSSL_VERSION}_amd64.deb

ARG FNM_RELEASE_URL=https://github.com/Schniz/fnm/releases
ARG FNM_VERSION=1.37.0
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${FNM_RELEASE_URL}/download/v${FNM_VERSION}/fnm-linux.zip \
&&  unzip fnm-linux.zip \
&&  rm -rf fnm-linux.zip \
&&  chmod +x fnm \
&&  mv fnm /usr/local/bin/fnm
