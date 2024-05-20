# FROM debian:bookworm-slim
# FROM linuxcontainers/debian-slim
FROM alpine:edge

# RUN sed -i \
#     's/deb.debian.org/mirrors.aliyun.com/g' \
#     /etc/apt/sources.list.d/debian.sources \
# &&  apt-get update \
# &&  apt-get upgrade -y

RUN sed -i \
        's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' \
        /etc/apk/repositories

RUN apk -U upgrade
RUN apk add --no-cache curl ca-certificates \
&&  update-ca-certificates

RUN mkdir -p /app

WORKDIR /app

RUN apk add --no-cache aria2
# RUN apk add --no-cache axel

# ADD curl-amd64 /usr/local/bin/curl
# RUN chmod +x /usr/local/bin/curl

# ARG PROXY_PREFIX=https://mirror.ghproxy.com/
ARG RELEASE_URL=https://github.com/go-task/task/releases
ARG TASK_VERSION=3.37.1

# &&  axel -k \
# &&  aria2c \
# &&  curl -sSL -vvv -k \
# ${PROXY_PREFIX}${RELEASE_URL}/download/v${TASK_VERSION}/task_linux_amd64.tar.gz
# RUN echo ${PROXY_PREFIX}${RELEASE_URL}/download/v${TASK_VERSION}/task_linux_amd64.tar.gz \
RUN aria2c \
    ${RELEASE_URL}/download/v${TASK_VERSION}/task_linux_amd64.tar.gz \
&&  mkdir ./task \
&&  tar -C ./task -xvf task_linux_amd64.tar.gz

RUN mv ./task/task /usr/local/bin/task \
&&  rm -rf ./*

RUN rm -r /var/cache/apk \
&&  rm -r /usr/share/man

# CMD [ "/usr/local/bin/task" ]
