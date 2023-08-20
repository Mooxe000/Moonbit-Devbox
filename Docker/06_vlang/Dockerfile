FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y build-essential

RUN mkdir -p /app

WORKDIR /app

ENV V_VERSION 2023.33
# https://github.com/vlang/v/releases
RUN axel -k \
    https://download.fastgit.org/vlang/v/releases/download/weekly.${V_VERSION}/v_linux.zip \
&&  unzip v_linux.zip \
&&  rm -rf v_linux.zip \
&&  mv v /usr/share

ENV PATH $PATH:/usr/share/v/

# RUN mkdir -p /app/wasi-sdk
# ADD ./wasi-sdk /app/wasi-sdk

# ENV WASI_SDK_VERSION 20.0
# # https://github.com/WebAssembly/wasi-sdk/releases
# RUN axel -k \
#     https://download.fastgit.org/WebAssembly/wasi-sdk/releases/download/wasi-sdk-20/wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz \
# &&  tar -C ./wasi-sdk -xvf wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz \
# &&  mv ./wasi-sdk/wasi-sdk-${WASI_SDK_VERSION}/* ./wasi-sdk \
# &&  rm -rf ./wasi-sdk/wasi-sdk-${WASI_SDK_VERSION} \
# &&  rm -rf wasi-sdk-${WASI_SDK_VERSION}-linux.tar.gz

# RUN dpkg -b ./wasi-sdk wasi-sdk-${WASI_SDK_VERSION}.deb \
# &&  dpkg-deb -x wasi-sdk-${WASI_SDK_VERSION}.deb /usr/share/wasi-sdk \
# &&  rm wasi-sdk-${WASI_SDK_VERSION}.deb \
# &&  rm -rf ./wasi-sdk

# ENV PATH $PATH:/usr/share/wasi-sdk/bin
# ENV WASI_SYSROOT_PATH /usr/share/wasi-sdk/share/wasi-sysroot
