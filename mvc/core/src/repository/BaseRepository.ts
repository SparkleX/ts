import {Connection} from "./Connection"

export class BaseRepository<T, ID>  {
    conn: Connection;
    constructor(conn:Connection) {
        this.conn = conn;
    }
    async findByKey(id: ID): Promise<T> {
        return null;
    }
}
