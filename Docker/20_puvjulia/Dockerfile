FROM mooxe/gotask

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt install -y python3 gnupg

RUN mkdir -p /app

WORKDIR /app

ARG PROXY_PREFIX=https://mirror.ghproxy.com/https://github.com/
# ARG PROXY_PREFIX=https://hub.fgit.cf/
# ARG PROXY_PREFIX=https://github.com/

ENV UV_VERSION 0.1.35
# https://github.com/astral-sh/uv/releases
RUN axel -k \
    ${PROXY_PREFIX}astral-sh/uv/releases/download/${UV_VERSION}/uv-x86_64-unknown-linux-musl.tar.gz \
&&  tar xvf uv-x86_64-unknown-linux-musl.tar.gz \
&&  mv uv-x86_64-unknown-linux-musl/uv /usr/local/bin/uv \
&&  rm -rf uv-x86_64-unknown-linux-musl*

RUN uv venv \
&&  uv pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip \
&&  uv pip install jill \
&&  uv run jill install --confirm
