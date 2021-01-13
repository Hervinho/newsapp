//Node modules
import express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';

//API URLs
import { appRoutes } from "./configs/routes.config";

//Winston
import { winstonLogger } from "./configs/winston.config";

class Server {

    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(express.static(path.join(__dirname, '../../client/dist' )));

        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
            next();
        });
    };

    private routes(): void {
        this.app.use((err:any, req:any, res:any, next:any) => {
            if (err) {
                winstonLogger.error(err);
            }
        }); 

        for (let key = 0; key < appRoutes.length; key++ ) {
            this.app.use(appRoutes[key].url, appRoutes[key].route);
        }
        
    }
}

export default new Server().app;