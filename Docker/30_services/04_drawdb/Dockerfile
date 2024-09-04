FROM mooxe/debuno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y curl

RUN mkdir -p /app

WORKDIR /app

ARG container_proxy

RUN mkdir -p /app/wabt

ARG WABT_RELEASE_URL=https://github.com/WebAssembly/wabt/releases
ARG WABT_VERSION=1.0.35
RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c \
    ${WABT_RELEASE_URL}/download/${WABT_VERSION}/wabt-${WABT_VERSION}-ubuntu-20.04.tar.gz \
&&  tar -C ./wabt -xvf wabt-${WABT_VERSION}-ubuntu-20.04.tar.gz \
&&  mv ./wabt/wabt-${WABT_VERSION}/* ./wabt \
&&  rm -rf ./wabt/wabt-${WABT_VERSION} \
&&  rm -rf wabt-${WABT_VERSION}-ubuntu-20.04.tar.gz

RUN mv ./wabt /usr/share
ENV PATH $PATH:/usr/share/wabt/bin

RUN /bin/bash -c \
    "$(curl -fsSL https://cli.moonbitlang.com/ubuntu_x86_64_moon_setup.sh)"

CMD [ "/bin/bash" ]
