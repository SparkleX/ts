import {PgConnectionPool, Connection,DbContext} from "../../../core"  
var connPool = new PgConnectionPool();

export async function Transaction(req, res, next) {
    var conn:Connection = await connPool.getConnection();
    var session = DbContext.getSessionWrite();
    session.run(function () {
        session.set("db", conn);
        try{
            conn.setAutoCommit(false);
            next();
            conn.commit();
        }catch(err){
            console.error(err);
            conn.rollback();
            res.status(500).end(err.message);
        }
        finally{
            conn.close();
        }
      }); 
}