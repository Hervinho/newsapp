import { winstonLogger } from "../configs/winston.config";
import { apiBaseUrl, apiKey, apiSuffix } from "../configs//api.config";
const fetch = require('node-fetch');

class News {
    constructor() {
        this.url = apiBaseUrl + apiSuffix + apiKey;
    }

    private url: String;

    public findAll(res: any) {
        let data:any;
        
        fetch(this.url)
            .then((res: { json: () => any; }) => res.json())
            .then((json: any) => {
                //console.log(json);
                data = {
                    success: true,
                    data: json
                };
                res.json(data);
            }).catch((err:any) => {
                data = {
                    success: false,
                    message: err.toString()
                };
                winstonLogger.error({ date: new Date().toLocaleString(), errorMessage: err});
                res.json(data);
            });
    }
}

export default new News();