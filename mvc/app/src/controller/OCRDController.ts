import { Request, Response, NextFunction } from 'express'
import { BaseController, pool} from './BaseController'
//import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { DoOCRD } from '../domain/DoOCRD';
//import { Transaction} from '../../../core'
import { DbUtil} from '../../../core'
import { OCRDService } from '../service/OCRDService';
import { TYPES } from '../config/types';
import { inject, injectable } from 'inversify';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";

//@Controller('api/OCRD')
@controller('/api/OCRD')
//@injectable()
export class OCRDController extends BaseController<DoOCRD,OCRDService>{
 
  //  @inject(TYPES.OCRDService) service1: OCRDService;


    
 

    @httpGet("/service/test", pool.getMiddleware())
    public async test(req: Request, res: Response): Promise<void>  {
        this.service.test(DbUtil.getConnection(req));
        super.ok().executeAsync();
    }
    public async get(@request() req: Request, @response() res: Response/*, @requestParam("id") id: string*/): Promise<void> {
      //console.debug(this.service1);
      //console.debug(id);
      return await super.get(req, res);
  }
   // @Get()
    public async search(req: Request, res: Response): Promise<void>  {
      // await super.search(req, res);
    }
 
 
    //@Post()
    public async create(req: Request, res: Response): Promise<void>  {
       // await super.create(req, res);
    }
 
 
   // @Put(':id')
    public async update(req: Request, res: Response): Promise<void>  {
     //   await super.update(req, res);
    }
 
 
    //@Delete(':id')
    public async delete(req: Request, res: Response): Promise<void>  {
      //  await super.delete(req, res);
    }
}