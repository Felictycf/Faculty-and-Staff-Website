#!/bin/bash
    echo 'start install nginx...'
    wget http://nginx.org/download/nginx-1.10.2.tar.gz
    tar -xvf nginx-1.10.2.tar.gz
    cd nginx-1.10.2
    yum -y install gcc pcre-devel openssl-devel
    ./configure
    make
    make install
    echo 'install nginx successful.'
fi

yum install nodejs
npm -v 
node -v 
