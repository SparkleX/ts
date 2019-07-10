import { Request, Response, NextFunction } from 'express'
import { BaseController} from './BaseController'
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
 

@Controller('api/OCRD')
export class UserController extends BaseController{
 
    @Get(':id')
    public async get(req: Request, res: Response): Promise<void> {
        await super.get(req, res);
    }

    @Get()
    private search(req: Request, res: Response): void {
        res.status(200).json({msg: 'get_all_called'});
    }
 
 
    @Post()
    private create(req: Request, res: Response): void {
        res.status(200).json({msg: 'add_called'});
    }
 
 
    @Put('update-user')
    private update(req: Request, res: Response): void {
        res.status(200).json({msg: 'update_called'});
    }
 
 
    @Delete('delete/:id')
    private delete(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({msg: 'delete_called'});
    }
 
 
 /*   @Get('practice/async')
    private async getWithAsync(req: Request, res: Response): Promise<void> {
     
        let msg;
     
        try {
         //   msg = await this.someMethodWhichReturnsAPromise(req);
        } catch (err) {
            msg = err;
        } finally {
            res.status(200).json({msg: msg});
        }
    }*/
}