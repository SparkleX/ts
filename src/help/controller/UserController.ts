import { Request, Response, NextFunction } from 'express'
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
 

@Controller('api/users')
export class UserController {
 
 
    @Get(':id')
    get(req: Request, res: Response): any {
        console.log(req.params.id);
        return res.status(200).json({msg: 'get_called'});
    }
 
 
    @Get()
    //@Middleware(middleware1)
    private getAll(req: Request, res: Response): void {
        res.status(200).json({msg: 'get_all_called'});
    }
 
 
    @Post()
    private add(req: Request, res: Response): void {
        res.status(200).json({msg: 'add_called'});
    }
 
 
    @Put('update-user')
   // @Middleware([middlware1, middleware1])
    private update(req: Request, res: Response): void {
        res.status(200).json({msg: 'update_called'});
    }
 
 
    @Delete('delete/:id')
    private delete(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({msg: 'delete_called'});
    }
 
 
    @Get('practice/async')
    private async getWithAsync(req: Request, res: Response): Promise<void> {
     
        let msg;
     
        try {
         //   msg = await this.someMethodWhichReturnsAPromise(req);
        } catch (err) {
            msg = err;
        } finally {
            res.status(200).json({msg: msg});
        }
    }
}