import {BaseRepository,Sql} from '../../../core'
import { DoOCRD } from '../domain/DoOCRD';
import { injectable } from "inversify";

@injectable()
export class OCRDRepository extends BaseRepository<DoOCRD,Number>{

    @Sql("select * from OCRD where name=?")
    public findByName(name:string):Promise<DoOCRD[]> {return null}
}