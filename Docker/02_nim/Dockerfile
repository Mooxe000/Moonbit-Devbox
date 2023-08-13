FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y gcc xz-utils

RUN mkdir -p /app

WORKDIR /app

RUN mkdir -p /app/nim
ADD ./nim /app/nim

ENV NIM_VERSION 2.0.1
# https://github.com/nim-lang/nightlies/releases
RUN axel -k \
    https://download.fastgit.org/nim-lang/nightlies/releases/download/latest-version-2-0/linux_x64.tar.xz \
&&  tar -C ./nim -xvf linux_x64.tar.xz \
&&  rm -rf linux_x64.tar.xz

# RUN cd ./nim/nim-${NIM_VERSION} \
# &&  /bin/bash ./install.sh /usr/local/bin

RUN dpkg -b ./nim nim-${NIM_VERSION}.deb \
&&  dpkg -i nim-${NIM_VERSION}.deb \
&&  rm nim-${NIM_VERSION}.deb \
&&  rm -rf ./nim \
&&  rm -rf /nim-${NIM_VERSION}

# RUN apt-get install -y emscripten

RUN apt-get install -y unzip
RUN axel -k \
    https://download.fastgit.org/aduros/wasm4/releases/latest/download/w4-linux.zip \
&&  unzip w4-linux.zip \
&&  mv w4 /usr/local/bin \
&& rm -rf w4-linux.zip

RUN mkdir -p /app/wabt
ADD ./wabt /app/wabt

ENV WABT_VERSION 1.0.33
# https://github.com/WebAssembly/wabt/releases
RUN axel -k \
    https://download.fastgit.org/WebAssembly/wabt/releases/download/${WABT_VERSION}/wabt-${WABT_VERSION}-ubuntu.tar.gz \
&&  tar -C ./wabt -xvf wabt-${WABT_VERSION}-ubuntu.tar.gz \
&&  mv ./wabt/wabt-${WABT_VERSION}/* ./wabt \
&&  rm -rf wabt-${WABT_VERSION}-ubuntu.tar.gz

RUN dpkg -b ./wabt wabt-${WABT_VERSION}.deb \
&&  dpkg -i wabt-${WABT_VERSION}.deb \
&&  rm wabt-${WABT_VERSION}.deb \
&&  rm -rf ./wabt \
&&  rm -rf /wabt-${WABT_VERSION}

# CMD [ "nim" ]
