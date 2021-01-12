# Overview

This is a MEAN stack skeleton to quickly get you started with your MEAN app project. The Node.js backend is built with Express and written in TypeScript, the database used is MySQL and the Angular front-end is inpired from the free Core UI project. You can change to PostgreSQL or anything else as you need.

# Prerequisites

Before you begin with your coding, you should make sure you have installed all these prerequisites for the project to work smoothly:

- Node.js & npm (https://nodejs.org/en/download/)
- Angular (npm install -g @angular/cli)
- A MySQL client (e.g. MySQLWorkbench)

# Installation

After you have installed all the prerequisites, you can install the app by doing the following:

- Navigate to client directory and run `npm install`.
- Navigate to server directory and run `npm install`.

# Running the application

- Server: Navigate to the server directory and run `npm run server`
- Client: Navigate to the client directory and run `ng server`

# Usage & Project Structure

This application holds the following folder structure:

- Client: which contains the Angular app
- Logs: which will contain the server logs
- node_modules: the server modules
- scripts: start and stop scripts for server deployment
- server: which contains the Node.js server app

## Client structure

- client/node_modules: contains modules for the Angular app
- client/dist: will contain the output of ng build command when building the client app for deployment
- client/src/assets: contains all assets such as images
- client/src/environments: contains files where you declare environemnt-specific variables (e.g. API URLs)
- client/src/scss: contains all CSS files
- client/src/app: contains the main angular app. Here we have 4 other folders:

    * client/src/app/containers: contains the main app HTML layout structure
    * client/src/app/helpers: contains helper functions, such as auth guards (to restrict access to certain routes)
    * client/src/app/services: contains files making calls to the Node.js server
    * client/src/app/views: contains all the different pages (Login, register, home, etcetera)

## Logs

The Logs folder will have 2 types of file, a server.log file and erros.log files. The error log files will contains any errors on the server, and are rotated daily (i.e. files names will have a suffix of current date)

## Scripts

The start.sh and stop.sh scripts are used to respectively start and stop the built app once deployed on the server.

Note: The build.sh script in the root folder in code is used to build and package the app for deployment. the server will be compiled from TypeScript to ES5 JavaScript and the Angular app will be packaged using ng build command. The output of running this script is a generated zip file (deploy.zip) that you can deploy on your server. Note that the folder structure for the server will remain the same after.

## Server structure

- server/database: contains a sample .sql script
- server/dist: will conatin the ES5 JavaScript compiled output of the build.sh script
- server/lib: contains all the logic for the server, and has the following structure:

### Configs - server/lib/configs/

The configs folder contains all the app configurations needed, and has the following files:

- `db.config.ts` : database connection config file. You can hardcode your values (not good programming practice) or set environment variables
- `jwt.config.ts` : contains the JWT secret (you can change to your own string)
- `passport.config.ts` : passport configurations for user authentication and token.
- `routes.config.ts` : where you add all your APIs with their respective routing files(e.g. /products)
- `winston.config.ts` : this files just sets up Winston for all the logging.

### Models - server/lib/models/

This folder is where you add logic for your models, a model here is where you add logic related to a specifc table in your database.

Meaning, if you have a table `products` in your database, you should create a model file (e.g. *product.model.ts*) for all your CRUD logic for that table. For example, there is a `user.model.ts` file there for a `user` table in a database. I have also included a `test.model.ts` file to show you the sructure of the model file.

### Routes - server/lib/routes

The routes folder will contain all your routes for the APIs that will be getting data from your models. You should create a route file for each of your model. The route files conatins all the HTTP methods (GET, POST, PUT) needed to access your resources through your models.
For example, there is a `user.route.ts` file showing how the routes for the user model are created.
I have also included a `test.route.ts` file to show you the sructure of the route file.

### App.ts - server/lib/app.ts

This is the main file that runs the server, you can specify and change the port here.

### Server.ts - server/lib/server.ts

Here is where you import all the routes, set up logging and configure Express with CORS, body-parser.
