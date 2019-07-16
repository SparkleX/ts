import { BaseService } from "./BaseService";
import { DoOCRD } from "../domain/DoOCRD";
//import { OCRDRepository } from "../repository/OCRDRepository";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { OCRDRepository } from "../repository/OCRDRepository";

@injectable()
export class OCRDService extends BaseService<DoOCRD, OCRDRepository>{

    public test():Promise<DoOCRD[]> {
        //return this.repo.findByName("1");
        return null;
    }

}