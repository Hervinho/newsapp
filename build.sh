#! /bin/sh

# 1. Server
npm install
tsc

npm install --prefix client
npm run build --prefix client

# 2. Prepare deployment artifact in a .zip file: deploy.zip
#zip -r deploy server/dist node_modules client/dist scripts