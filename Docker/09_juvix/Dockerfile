FROM mooxe/debuno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN mkdir -p /app

WORKDIR /app

ENV JUVIX_VERSION 0.4.3
# https://github.com/anoma/juvix/releases
RUN axel -k \
    https://download.fastgit.org/anoma/juvix/releases/download/v${JUVIX_VERSION}/juvix-linux_x86_64-v${JUVIX_VERSION}.zip \
&&  unzip juvix-linux_x86_64-v${JUVIX_VERSION}.zip \
&&  rm -rf juvix-linux_x86_64-v${JUVIX_VERSION}.zip \
&&  mv juvix /usr/local/bin

RUN mkdir -p /app/wasi-sdk
ADD ./wasi-sdk /app/wasi-sdk

ENV WASI_SDK_VERSION 16
# https://github.com/WebAssembly/wasi-sdk/releases
RUN axel -k \
    https://download.fastgit.org/WebAssembly/wasi-sdk/releases/download/wasi-sdk-${WASI_SDK_VERSION}/wasi-sdk-${WASI_SDK_VERSION}.0-linux.tar.gz \
&&  tar -C ./wasi-sdk -xvf wasi-sdk-${WASI_SDK_VERSION}.0-linux.tar.gz \
&&  mv ./wasi-sdk/wasi-sdk-${WASI_SDK_VERSION}.0/* ./wasi-sdk \
&&  rm -rf ./wasi-sdk/wasi-sdk-${WASI_SDK_VERSION}.0 \
&&  rm -rf wasi-sdk-${WASI_SDK_VERSION}.0-linux.tar.gz

RUN dpkg -b ./wasi-sdk wasi-sdk-${WASI_SDK_VERSION}.0.deb \
&&  dpkg-deb -x wasi-sdk-${WASI_SDK_VERSION}.0.deb /usr/share/wasi-sdk \
&&  rm wasi-sdk-${WASI_SDK_VERSION}.0.deb \
&&  rm -rf ./wasi-sdk

ENV PATH $PATH:/usr/share/wasi-sdk/bin
ENV WASI_SYSROOT_PATH /usr/share/wasi-sdk/share/wasi-sysroot

RUN apt-get install -y libxml2
