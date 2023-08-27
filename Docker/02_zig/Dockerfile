FROM mooxe/debuno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y xz-utils

RUN mkdir -p /app

WORKDIR /app

ENV ZIG_VERSION 0.12.0
# https://github.com/ziglang/zig/releases
RUN axel -k \
    https://ziglang.org/builds/zig-linux-x86_64-${ZIG_VERSION}-dev.89+913511557.tar.xz \
&&  tar xvf zig-linux-x86_64-${ZIG_VERSION}-dev.89+913511557.tar.xz \
&&  rm -rf zig-linux-x86_64-${ZIG_VERSION}-dev.89+913511557.tar.xz \
&&  mv zig-linux-x86_64-${ZIG_VERSION}-dev.89+913511557 zig \
&&  mv ./zig /opt

ENV PATH $PATH:/opt/zig

RUN mkdir -p /app/wabt

ENV WABT_VERSION 1.0.33
# https://github.com/WebAssembly/wabt/releases
RUN axel -k \
    https://download.fastgit.org/WebAssembly/wabt/releases/download/${WABT_VERSION}/wabt-${WABT_VERSION}-ubuntu.tar.gz \
&&  tar -C ./wabt -xvf wabt-${WABT_VERSION}-ubuntu.tar.gz \
&&  mv ./wabt/wabt-${WABT_VERSION}/* ./wabt \
&&  rm -rf ./wabt/wabt-${WABT_VERSION} \
&&  rm -rf wabt-${WABT_VERSION}-ubuntu.tar.gz

RUN mv ./wabt /usr/share
ENV PATH $PATH:/usr/share/wabt/bin
