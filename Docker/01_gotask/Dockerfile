FROM debian:bookworm-slim

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN mkdir -p /app

WORKDIR /app

RUN apt install -y aria2

ARG container_proxy

ARG RELEASE_URL=https://github.com/go-task/task/releases
ARG TASK_VERSION=3.37.2
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${RELEASE_URL}/download/v${TASK_VERSION}/task_linux_amd64.tar.gz \
&&  mkdir ./task \
&&  tar -C ./task -xvf task_linux_amd64.tar.gz \
&&  mv ./task/task /usr/local/bin/task \
&&  rm -rf ./*
