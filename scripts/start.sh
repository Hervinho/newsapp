cd /var/www/app/server/dist/
#sudo forever start app.js # Running forever with sudo seems to make env variables not available
forever start app.js
