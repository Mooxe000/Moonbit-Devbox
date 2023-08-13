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
&&  rm -rf w4-linux.zip

# https://github.com/nim-lang/nimble/releases
RUN axel -k \
    https://download.fastgit.org/nim-lang/nimble/releases/download/latest/nimble-linux_x64.tar.gz \
&&  tar xvf nimble-linux_x64.tar.gz \
&&  mv nimble /usr/local/bin \
&&  rm -rf nimble-linux_x64.tar.gz

RUN mkdir -p /app/wasi-sdk
ADD ./wasi-sdk /app/wasi-sdk

ENV WASI_SDK_VERSION 20.0
# https://github.com/WebAssembly/wasi-sdk/releases
RUN axel -k \
    https://download.fastgit.org/WebAssembly/wasi-sdk/releases/download/wasi-sdk-20/wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz \
&&  tar -C ./wasi-sdk -xvf wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz \
&&  mv ./wasi-sdk/wasi-sdk-${WASI_SDK_VERSION}/* ./wasi-sdk \
&&  rm -rf wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz

RUN dpkg -b ./wasi-sdk wasi-sdk-${WASI_SDK_VERSION}.deb \
&&  dpkg -i wasi-sdk-${WASI_SDK_VERSION}.deb \
&&  rm wasi-sdk-${WASI_SDK_VERSION}.deb \
&&  rm -rf ./wasi-sdk

ENV WASI_SDK_PATH /wasi-sdk-${WASI_SDK_VERSION}

# CMD [ "nim" ]
