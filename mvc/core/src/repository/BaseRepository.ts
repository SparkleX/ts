import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class BaseRepository<T, ID>  {
    async findByKey(id: ID): Promise<T> {
        return null;
    }
}
