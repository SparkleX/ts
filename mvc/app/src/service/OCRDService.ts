import { BaseService } from "./BaseService";
import { DoOCRD } from "../domain/DoOCRD";
//import { OCRDRepository } from "../repository/OCRDRepository";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { OCRDRepository } from "../repository/OCRDRepository";
import { Connection } from "../../../core";

@injectable()
export class OCRDService extends BaseService<DoOCRD, OCRDRepository>{

    public async test(conn:Connection):Promise<DoOCRD[]> {
        return await this.repo.findByName("1");
    }
}