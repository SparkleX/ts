import {Connection} from "../db/Connection"
import { injectable } from "inversify";

@injectable()
export class BaseRepository<T, ID>  {
    conn: Connection;
    constructor(conn:Connection) {
        this.conn = conn;
    }
    async findByKey(id: ID): Promise<T> {
        return null;
    }
}
