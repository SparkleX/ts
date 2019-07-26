import {BaseRepository, Connection,Sql} from 'next-core'
import { DoOCRD } from '../domain/DoOCRD';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class OCRDRepository extends BaseRepository<DoOCRD,Number>{
    @Sql("select * from OCRD where name= $1")
    public async findByName(params:any[]):Promise<DoOCRD[]> {return null}
}