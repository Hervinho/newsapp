
# Prerequisites

Before you begin with your coding, you should make sure you have installed all these prerequisites for the project to work smoothly:

- Node.js & npm (https://nodejs.org/en/download/)
- Angular (npm install -g @angular/cli)

# Installation

After you have installed all the prerequisites, you can install the app by doing the following:

- Navigate to client directory and run `npm install`.
- Navigate to server directory and run `npm install`.

# Running the application in development

- Server: Navigate to the server directory and run `npm run server`
- Client: Navigate to the client directory and run `ng server`

# Deployment

Uncomment line 25 in `server/lib/server.ts` and run `build.sh` script in the root folder in code is used to build and package the app for deployment and generate deploy.zip file that you can deploy on your server. 
After unzipping, you can run the app with `npm start`. The app runs on port 5500

## Logs

The Logs folder will have 2 types of file, a server.log file and erros.log files. The error log files will contains any errors on the server, and are rotated daily (i.e. files names will have a suffix of current date)
