FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y gcc xz-utils

RUN mkdir -p /app

WORKDIR /app

# RUN mkdir -p /app/nim
# ADD ./nim /app/nim

# ENV NIM_VERSION 2.0.1
ENV NIM_VERSION 1.6.15
# https://github.com/nim-lang/nightlies/releases
# https://download.fastgit.org/nim-lang/nightlies/releases/download/latest-version-2-0/linux_x64.tar.xz \
RUN axel -k \
    https://download.fastgit.org/nim-lang/nightlies/releases/download/latest-version-1-6/linux_x64.tar.xz \
&&  tar xvf linux_x64.tar.xz \
&&  rm -rf linux_x64.tar.xz

RUN cd ./nim-${NIM_VERSION} \
&&  chmod +x ./install.sh \
&&  ./install.sh /usr/share \
&&  ln -s /usr/share/nim/bin/nim /usr/local/bin/nim \
&&  cd /app \
&&  rm -rf ./nim-${NIM_VERSION}

# RUN apt-get install -y emscripten

# https://github.com/nim-lang/nimble/releases
RUN axel -k \
    https://download.fastgit.org/nim-lang/nimble/releases/download/latest/nimble-linux_x64.tar.gz \
&&  tar xvf nimble-linux_x64.tar.gz \
&&  mv nimble /usr/local/bin \
&&  rm -rf nimble-linux_x64.tar.gz

RUN apt-get install -y unzip
RUN axel -k \
    https://download.fastgit.org/aduros/wasm4/releases/latest/download/w4-linux.zip \
&&  unzip w4-linux.zip \
&&  mv w4 /usr/local/bin \
&&  rm -rf w4-linux.zip

RUN mkdir -p /app/wasi-sdk
ADD ./wasi-sdk /app/wasi-sdk

ENV WASI_SDK_VERSION 20.0
# https://github.com/WebAssembly/wasi-sdk/releases
RUN axel -k \
    https://download.fastgit.org/WebAssembly/wasi-sdk/releases/download/wasi-sdk-20/wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz \
&&  tar -C ./wasi-sdk -xvf wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz \
&&  mv ./wasi-sdk/wasi-sdk-${WASI_SDK_VERSION}/* ./wasi-sdk \
&&  rm -rf ./wasi-sdk/wasi-sdk-${WASI_SDK_VERSION} \
&&  rm -rf wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz

RUN dpkg -b ./wasi-sdk wasi-sdk-${WASI_SDK_VERSION}.deb \
&&  dpkg-deb -x wasi-sdk-${WASI_SDK_VERSION}.deb /usr/share/wasi-sdk \
&&  rm wasi-sdk-${WASI_SDK_VERSION}.deb \
&&  rm -rf ./wasi-sdk

RUN mkdir -p /app/binaryen
ADD ./binaryen /app/binaryen

ENV BINARYEN_VERSION 114
# https://github.com/WebAssembly/binaryen/releases
RUN axel -k \
    https://download.fastgit.org/WebAssembly/binaryen/releases/download/version_114/binaryen-version_${BINARYEN_VERSION}-x86_64-linux.tar.gz \
&&  tar -C ./binaryen -xvf binaryen-version_${BINARYEN_VERSION}-x86_64-linux.tar.gz \
&&  mv ./binaryen/binaryen-version_${BINARYEN_VERSION}/* ./binaryen \
&&  rm -rf ./binaryen/binaryen-version_${BINARYEN_VERSION} \
&&  rm -rf binaryen-version_${BINARYEN_VERSION}-x86_64-linux.tar.gz

RUN dpkg -b ./binaryen binaryen-version_${BINARYEN_VERSION}.deb \
&&  dpkg-deb -x binaryen-version_${BINARYEN_VERSION}.deb /usr/share/binaryen \
&&  rm binaryen-version_${BINARYEN_VERSION}.deb \
&&  rm -rf ./binaryen

ENV WASI_SDK_PATH /usr/share/wasi-sdk

CMD [ "/bin/bash" ]
