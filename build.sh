#! /bin/sh

npm install
tsc

npm install --prefix client
npm run build --prefix client

cp ./server/dist ./deploy/server/dist
cp ./node_modules ./deploy/node_modules
cp ./client/dist ./deploy/client/dist