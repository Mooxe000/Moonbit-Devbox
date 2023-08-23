FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y axel xz-utils

RUN mkdir -p /app

WORKDIR /app

# ENV NODE_VERSION=18.15.0
# RUN curl -O \
#     https://nodejs.org/download/release/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz \
# &&  tar xvf node-v${NODE_VERSION}-linux-x64.tar.xz \
# &&  rm -rf node-v${NODE_VERSION}-linux-x64.tar.xz \
# &&  mv node-v${NODE_VERSION}-linux-x64 node \
# &&  mv ./node /usr/share

# ENV PATH $PATH:/usr/share/node/bin

ENV FNM_VERSION=1.35.1
# https://github.com/Schniz/fnm/releases
RUN axel -k \
    https://download.fastgit.org/Schniz/fnm/releases/download/v${FNM_VERSION}/fnm-linux.zip \
&&  unzip fnm-linux.zip \
&&  rm -rf fnm-linux.zip \
&&  chmod +x fnm \
&&  mv fnm /usr/local/bin/fnm

ENV NODE_VERSION=18.15.0
RUN fnm install ${NODE_VERSION}
ENV PATH $PATH:/root/.local/share/fnm/node-versions/v${NODE_VERSION}/installation/bin
RUN npm install -g npm@9.8.1

ENV AssemblyScript_VERSION=0.27.9
# https://github.com/AssemblyScript/assemblyscript
RUN axel -k \
    http://ghproxy.com/https://github.com/AssemblyScript/assemblyscript/archive/refs/tags/v${AssemblyScript_VERSION}.zip \
&&  unzip assemblyscript-${AssemblyScript_VERSION}.zip \
&&  rm assemblyscript-${AssemblyScript_VERSION}.zip \
&&  mv assemblyscript-${AssemblyScript_VERSION} assemblyscript \
&&  mv assemblyscript /usr/share

RUN cd /usr/share/assemblyscript \
&&  npm install \
&&  npm run build \
&&  npm link

CMD [ "asc" ]
