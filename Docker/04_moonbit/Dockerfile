FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y curl

RUN mkdir -p /app

WORKDIR /app

RUN mkdir -p /app/wabt

ENV WABT_VERSION 1.0.33
# https://github.com/WebAssembly/wabt/releases
RUN axel -k \
    https://download.fastgit.org/WebAssembly/wabt/releases/download/${WABT_VERSION}/wabt-${WABT_VERSION}-ubuntu.tar.gz \
&&  tar -C ./wabt -xvf wabt-${WABT_VERSION}-ubuntu.tar.gz \
&&  mv ./wabt/wabt-${WABT_VERSION}/* ./wabt \
&&  rm -rf ./wabt/wabt-${WABT_VERSION} \
&&  rm -rf wabt-${WABT_VERSION}-ubuntu.tar.gz

RUN mv ./wabt /usr/share
ENV PATH $PATH:/usr/share/wabt/bin

RUN /bin/bash -c \
    "$(curl -fsSL https://www.moonbitlang.com/release/ubuntu_x86_64_moon_setup.sh)"

CMD [ "/bin/bash" ]
