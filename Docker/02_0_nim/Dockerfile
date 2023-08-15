FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y xz-utils

RUN mkdir -p /app

WORKDIR /app

# RUN mkdir -p /app/nim
# ADD ./nim /app/nim

ENV NIM_VERSION 2.0.1
# ENV NIM_VERSION 1.6.15
# https://github.com/nim-lang/nightlies/releases
# https://download.fastgit.org/nim-lang/nightlies/releases/download/latest-version-1-6/linux_x64.tar.xz \
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

# https://github.com/nim-lang/nimble/releases
RUN axel -k \
    https://download.fastgit.org/nim-lang/nimble/releases/download/latest/nimble-linux_x64.tar.gz \
&&  tar xvf nimble-linux_x64.tar.gz \
&&  mv nimble /usr/local/bin \
&&  rm -rf nimble-linux_x64.tar.gz

RUN apt-get install -y git python3 gcc lbzip2

RUN git clone http://ghproxy.com/https://github.com/emscripten-core/emsdk.git \
&&  mv emsdk /opt \
&&  cd /opt/emsdk \
&&  ./emsdk install latest \
&&  ./emsdk activate latest \
&&  echo 'source /opt/emsdk/emsdk_env.sh' >> ~/.bashrc

ENV C_INCLUDE_PATH /opt/emsdk/upstream/emscripten/cache/sysroot/include
ENV LD_LIBFRARY_PATH /opt/emsdk/upstream/emscripten/cache/sysroot/lib
ENV LIBFRARY_PATH $LD_LIBFRARY_PATH

RUN sed -i 's/", "/, /g' \
    /opt/emsdk/upstream/emscripten/cache/sysroot/include/emscripten/emscripten.h

RUN apt install -y make neovim

# RUN apt-get install -y emscripten
