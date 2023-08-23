FROM mooxe/deno

RUN sed -i \
    's/deb.debian.org/mirrors.aliyun.com/g' \
    /etc/apt/sources.list.d/debian.sources \
&&  apt-get update \
&&  apt-get upgrade -y

RUN mkdir -p /app

WORKDIR /app

RUN apt-get install -y ca-certificates

RUN axel -k \
    https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb \
&&  dpkg -i packages-microsoft-prod.deb \
&&  rm packages-microsoft-prod.deb

RUN apt-get update \
&&  apt-get install -y dotnet-sdk-7.0

RUN dotnet new install Bolero.Templates
