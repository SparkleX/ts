//import {BaseRepository} from '../../../core/src/repository/BaseRepository'
import {Sql} from '../../../core/src/repository/Sql';
import { DoOCRD } from '../domain/DoOCRD';


export class OCRDRepository {//extends BaseRepository<DoOCRD,Number>{
    @Sql("select * from OCRD where name=?")
    public findByName(name:string):DoOCRD[] {return null}
}