export interface BaseRepository<T,ID> {
    constructor(): void;
    findByKey(id:ID) : Promise<T>;
}