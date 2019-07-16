import {BaseRepository, Connection} from '../../../core'
import {Sql} from '../../../core/src/repository/Sql';
import { DoOCRD } from '../domain/DoOCRD';


export class OCRDRepository extends BaseRepository<DoOCRD,Number>{
    @Sql("select * from OCRD where name= $1")
    public async findByName(params:any[]):Promise<DoOCRD[]> {return null}
}