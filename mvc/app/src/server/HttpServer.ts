import * as bodyParser from 'body-parser'
import * as express from 'express'
import { Server } from '@overnightjs/core'
import { OCRDController } from '../controller/OCRDController'
 
export class HttpServer extends Server {
    constructor() {
        super();
        this.app.use('/html', express.static('public'))
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        
        let CoOCRD = new OCRDController();
        super.addControllers([CoOCRD]);
        
    }
    public start(port: number) {
        this.app.listen(port, () => {
            console.log('Server listening on port: ' + port);
        })
    }
}
//export default HttpServer;