FROM node:20-bullseye-slim

RUN sed -i \
      's/deb.debian.org/mirrors.aliyun.com/g' \
      /etc/apt/sources.list \
&&  apt-get update \
&&  apt-get upgrade -y

RUN mkdir -p /app

WORKDIR /app

RUN npm i -g npm \
      --registry=http://registry.npmmirror.com \
&&  npm i -g nnrm \
      --registry=http://registry.npmmirror.com \
&&  nnrm use taobao

RUN yarn global add pnpm vite
