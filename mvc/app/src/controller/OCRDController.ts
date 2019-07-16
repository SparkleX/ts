import { Request, Response, NextFunction } from 'express'
import { BaseController, pool} from './BaseController'
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { DoOCRD } from '../domain/DoOCRD';
//import { Transaction} from '../../../core'
import { DbUtil} from '../../../core'

@Controller('api/OCRD')
export class OCRDController extends BaseController<DoOCRD>{
 
    public constructor() {
        super();
        console.log("OCRDController.constructor");
    }
    @Get(':id')
    @Middleware(pool.getMiddleware())
   // @Transaction
    public async get(req: Request, res: Response): Promise<void> {
        return await super.get(req, res);
    }

    @Get()
    public async search(req: Request, res: Response): Promise<void>  {
        await super.search(req, res);
    }
 
 
    @Post()
    public async create(req: Request, res: Response): Promise<void>  {
        await super.create(req, res);
    }
 
 
    @Put(':id')
    public async update(req: Request, res: Response): Promise<void>  {
        await super.update(req, res);
    }
 
 
    @Delete(':id')
    public async delete(req: Request, res: Response): Promise<void>  {
        await super.delete(req, res);
    }
}