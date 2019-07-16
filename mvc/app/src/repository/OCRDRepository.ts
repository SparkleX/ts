import {BaseRepository,Sql} from '../../../core'
import { DoOCRD } from '../domain/DoOCRD';

//@injectable()
export class OCRDRepository extends BaseRepository<DoOCRD,Number>{

    @Sql("select * from OCRD where name=?")
    public async findByName(name:string):Promise<DoOCRD[]> {return null}
}