import { Router } from "express";
import passport from "passport";
import * as News from '../models/news.model';
import validator from "validator";

class TestRoute {
    constructor(){
        this.router = Router();
        this.routes();
    };

    public router:any;

    public routes(){
        //get all
        this.router.get("/", (req:any, res:any) => {
            News.default.findAll(res);
        });
    }
}

export default new TestRoute().router;