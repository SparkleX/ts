import { BaseService } from "./BaseService";
import { DoOCRD } from "../domain/DoOCRD";
//import { OCRDRepository } from "../repository/OCRDRepository";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { OCRDRepository } from "../repository/OCRDRepository";
import { Connection } from "next-core";
import { DESIGN_PARAM_TYPES } from "inversify/dts/constants/metadata_keys";

@injectable()
export class OCRDService extends BaseService<DoOCRD, OCRDRepository>{

    public async test():Promise<DoOCRD[]> {
        var data = await this.repo.findByName(["1"]);
        return data;
    }
}