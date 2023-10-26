FROM debian:bookworm-slim

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y axel

RUN mkdir -p /app

WORKDIR /app

ENV TASK_VERSION 3.31.0
# https://github.com/go-task/task/releases
RUN axel -k \
    https://download.fastgit.org/go-task/task/releases/download/v${TASK_VERSION}/task_linux_amd64.tar.gz \
&&  mkdir ./task \
&&  tar -C ./task -xvf task_linux_amd64.tar.gz

RUN mv ./task/task /usr/local/bin/task \
&&  rm -rf ./*

CMD [ "/usr/local/bin/task" ]
