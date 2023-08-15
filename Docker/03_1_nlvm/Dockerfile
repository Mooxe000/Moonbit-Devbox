FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN apt-get install -y xz-utils

RUN mkdir -p /app

WORKDIR /app

# RUN mkdir -p /app/nlvm
# ADD ./nim /app/nlvm

ENV NLVM_VERSION eed6a08
# https://github.com/arnetheduck/nlvm/releases
RUN axel -k \
    https://download.fastgit.org/arnetheduck/nlvm/releases/download/continuous/nlvm-${NLVM_VERSION}.tar.xz \
&&  tar xvf nlvm-${NLVM_VERSION}.tar.xz \
&&  rm -rf nlvm-${NLVM_VERSION}.tar.xz \
&&  mv nlvm-${NLVM_VERSION} nlvm \
&&  mv ./nlvm /opt

ENV PATH $PATH:/opt/nlvm

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

CMD [ "/bin/bash" ]
