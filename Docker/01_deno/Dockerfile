FROM mooxe/gotask

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y unzip

RUN mkdir -p /app

WORKDIR /app

ENV DENO_VERSION 1.36.3
# https://github.com/denoland/deno/releases
RUN axel -k \
    https://download.fastgit.org/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
&&  unzip deno-x86_64-unknown-linux-gnu.zip

RUN mv ./deno /usr/local/bin/deno \
&&  rm -rf ./*

CMD [ "/usr/local/bin/deno" ]
