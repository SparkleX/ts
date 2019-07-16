import {Connection} from "../db/Connection"

//@injectable()
export class BaseRepository<T, ID>  {
    async findByKey(conn:Connection, id: ID): Promise<T> {
        return null;
    }
}
