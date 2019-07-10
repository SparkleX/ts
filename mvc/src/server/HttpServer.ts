import * as bodyParser from 'body-parser'
import { Server } from '@overnightjs/core'

import { UserController } from '../controller/UserController'
 
 
export class HttpServer extends Server {
    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        let userController = new UserController();

        super.addControllers([userController]);
        
    }
    public start(port: number) {
        this.app.listen(port, () => {
            console.log('Server listening on port: ' + port);
        })
    }
}
export default HttpServer;