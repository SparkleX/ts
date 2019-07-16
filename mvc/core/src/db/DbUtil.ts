import { Connection } from "./Connection";

export class DbUtil {
    public static getConnection(req:Request): Connection {
        return req["__connection"];
    }
}