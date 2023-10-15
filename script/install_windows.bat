@echo off
setlocal

:: 设置下载链接
set NGINX_URL=https://nginx.org/download/nginx-1.20.1.zip
set NODE_URL=https://nodejs.org/dist/v14.17.5/node-v14.17.5-win-x64.zip
set MONGODB_URL=https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.4.6-signed.msi

:: 使用start命令打开链接
start "" %NGINX_URL%
start "" %NODE_URL%
start "" %MONGODB_URL%

endlocal
exit

