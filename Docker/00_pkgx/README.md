### image-list

```dockerfile
FROM debian:bookworm-slim
FROM linuxcontainers/debian-slim
FROM alpine:edge
FROM alpine
```

### download-tools

```dockerfile
RUN axel -k \
RUN aria2c \
RUN curl -sSL -vvv -k \
RUN curl --compressed -f --proto '=https' \
```

### download-git-mirror

```dockerfile
ARG PROXY_PREFIX=https://mirror.ghproxy.com/
```

### alpine-mirror-update

```dockerfile
RUN sed -i \
        's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' \
        /etc/apk/repositories

RUN apk -U upgrade
RUN apk add --no-cache bash curl \
    ca-certificates \
&&  update-ca-certificates
```

### alpine-clean

```dockerfile
RUN rm -r /var/cache/apk \
&&  rm -r /usr/share/man
```

### debian-mirror-update

```dockerfile
RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y
```

### alpine-pkg-glibc

- https://github.com/sgerrand/alpine-pkg-glibc

```dockerfile
RUN apk add --no-cache libc6-compat

RUN aria2c https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
&&  install -m 644 sgerrand.rsa.pub /etc/apk/keys \
&&  rm sgerrand.rsa.pub

RUN export http_proxy=${container_proxy} \
&&  export https_proxy=${container_proxy} \
&&  aria2c https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.35-r1/glibc-bin-2.35-r1.apk \
&&  aria2c https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.35-r1/glibc-i18n-2.35-r1.apk \
&&  apk add glibc-bin-2.35-r1.apk glibc-i18n-2.35-r1.apk \
&&  /usr/glibc-compat/bin/localedef -i en_US -f UTF-8 en_US.UTF-8 \
&&  aria2c https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.35-r1/glibc-2.35-r1.apk \
&&  apk add --force-overwrite glibc-2.35-r1.apk \
&&  rm glibc-bin-2.35-r1.apk glibc-i18n-2.35-r1.apk glibc-2.35-r1.apk

ENV PATH /usr/glibc-compat/bin:$PATH
```
