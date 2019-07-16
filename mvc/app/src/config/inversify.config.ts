import { Container } from "inversify";
import { TYPES } from "./types";
import { OCRDService } from "../service/OCRDService";
import { OCRDRepository } from "../repository/OCRDRepository";


const container = new Container();
container.bind<OCRDService>(TYPES.OCRDService).to(OCRDService);
container.bind<OCRDRepository>(TYPES.OCRDRepository).to(OCRDRepository);

export { container };