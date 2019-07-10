import * as bodyParser from 'body-parser'

import { Server } from '@overnightjs/core'
import { UserController } from './UserController'
//import { LoginController } from './LoginController'
 
 
export class SampleServer extends Server {
 
 
    constructor() {
        super();
        
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        
  //      let loginController = new LoginController();
        let userController = new UserController();
        
        super.addControllers([userController]);
    }
 
 
    public start(port: number) {
     
        this.app.listen(port, () => {
            console.log('Server listening on port: ' + port);
        })
    }
}
export default SampleServer;