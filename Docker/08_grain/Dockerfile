FROM mooxe/debuno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y build-essential

RUN mkdir -p /app

WORKDIR /app

ENV GRAIN_VERSION 0.5.13
# https://github.com/grain-lang/grain/releases
# https://download.fastgit.org/grain-lang/grain/releases/download/preview/grain-linux-x64 \
RUN axel -k \
    https://download.fastgit.org/grain-lang/grain/releases/download/grain-v${GRAIN_VERSION}/grain-linux-x64 \
&&  mv grain-linux-x64 grain \
&&  chmod +x grain \
&&  mv grain /usr/local/bin/

ENV FNM_VERSION=1.35.1
# https://github.com/Schniz/fnm/releases
RUN axel -k \
    https://download.fastgit.org/Schniz/fnm/releases/download/v${FNM_VERSION}/fnm-linux.zip \
&&  unzip fnm-linux.zip \
&&  rm -rf fnm-linux.zip \
&&  chmod +x fnm \
&&  mv fnm /usr/local/bin/fnm

ENV NODE_VERSION=18.17.1
RUN fnm install ${NODE_VERSION}
ENV PATH $PATH:/root/.local/share/fnm/node-versions/v${NODE_VERSION}/installation/bin
RUN npm i -g npm@9.8.1
