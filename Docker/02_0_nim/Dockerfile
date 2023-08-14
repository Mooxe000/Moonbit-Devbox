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

ENV NIM_VERSION 2.0.1
# ENV NIM_VERSION 1.6.15
# https://github.com/nim-lang/nightlies/releases
# https://download.fastgit.org/nim-lang/nightlies/releases/download/latest-version-1-6/linux_x64.tar.xz
RUN axel -k \
    https://download.fastgit.org/nim-lang/nightlies/releases/download/latest-version-2-0/linux_x64.tar.xz \
&&  tar xvf linux_x64.tar.xz \
&&  rm -rf linux_x64.tar.xz

RUN cd ./nim-${NIM_VERSION} \
&&  chmod +x ./install.sh \
&&  ./install.sh /usr/share \
&&  ln -s /usr/share/nim/bin/nim /usr/local/bin/nim \
&&  cd /app \
&&  rm -rf ./nim-${NIM_VERSION}

RUN apt-get install -y emscripten
