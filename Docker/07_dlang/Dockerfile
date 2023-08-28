FROM mooxe/debuno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y xz-utils libxml2

RUN mkdir -p /app

WORKDIR /app

ENV D_VERSION 1.34.0
# https://github.com/ldc-developers/ldc/releases
RUN axel -k \
    https://download.fastgit.org/ldc-developers/ldc/releases/download/v${D_VERSION}-beta2/ldc2-${D_VERSION}-beta2-linux-x86_64.tar.xz \
&&  tar xvf ldc2-${D_VERSION}-beta2-linux-x86_64.tar.xz \
&&  rm -rf ldc2-${D_VERSION}-beta2-linux-x86_64.tar.xz \
&&  mv ldc2-${D_VERSION}-beta2-linux-x86_64 ldc2 \
&&  mv ldc2 /usr/share

ENV PATH $PATH:/usr/share/ldc2/bin
