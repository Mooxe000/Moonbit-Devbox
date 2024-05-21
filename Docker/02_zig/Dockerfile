FROM mooxe/debuno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN mkdir -p /app

WORKDIR /app

ARG container_proxy

ARG ZIG_RELEASE_URL=https://github.com/ziglang/zig/releases
ARG ZIG_VERSION=0.13.0-dev.217+ad7217229
# https://ziglang.org/builds/zig-linux-x86_64-${ZIG_VERSION}.tar.xz \
# ARG ZIG_VERSION=0.12.0
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    https://ziglang.org/builds/zig-linux-x86_64-${ZIG_VERSION}.tar.xz \
&&  tar xvf zig-linux-x86_64-${ZIG_VERSION}.tar.xz \
&&  rm -rf zig-linux-x86_64-${ZIG_VERSION}.tar.xz \
&&  mv zig-linux-x86_64-${ZIG_VERSION} zig \
&&  mv ./zig /opt

ENV PATH $PATH:/opt/zig

RUN mkdir -p /app/wabt

ARG WABT_RELEASE_URL=https://github.com/WebAssembly/wabt/releases
ARG WABT_VERSION=1.0.35
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${WABT_RELEASE_URL}/download/${WABT_VERSION}/wabt-${WABT_VERSION}-ubuntu-20.04.tar.gz \
&&  tar -C ./wabt -xvf wabt-${WABT_VERSION}-ubuntu-20.04.tar.gz \
&&  mv ./wabt/wabt-${WABT_VERSION}/* ./wabt \
&&  rm -rf ./wabt/wabt-${WABT_VERSION} \
&&  rm -rf wabt-${WABT_VERSION}-ubuntu-20.04.tar.gz

RUN mv ./wabt /usr/share
ENV PATH $PATH:/usr/share/wabt/bin
