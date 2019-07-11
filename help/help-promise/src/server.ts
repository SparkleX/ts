import * as express from "express";
import {Context, ContextData} from "./Context";
const app = express();
const port = 3000


Context.current = new ContextData();

async function openConn(req:any):Promise<Number> {
    var id = req.param("id");
    const one = new Number(id);
    return one;

}


app.get( "/index", async ( req, res ) => {
   
    if(Context.current.conn) {
        console.debug(Context.current.conn);
    }
    
    let a = await openConn(req);
    Context.current.conn = a;

    console.debug(Context.current.conn);
    res.end("OK");

} );


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );