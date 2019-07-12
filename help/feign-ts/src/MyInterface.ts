import {Headers, Get, Post, Put, FormData, Delete} from "pretend"

export class MyInterface {

    @Headers('Accept: application/json')
    @Get('/TripPinRESTierService/(S(q3ekc5npul3ltsrxhvlprqz5))/People')
    public async get() {}

   // @Headers('Accept: application/json')
    @Get('/TripPinRESTierService/(S(q3ekc5npul3ltsrxhvlprqz5))/People')    
    public async get1() {}
  
    @Post('/path')
    public async post(body: any) {}
  
  //  @Post('/path')
//    public async post(@FormData('name') blob: any) {}
  
    @Put('/path')
    public async put() {}
  
    @Delete('/path/:id')
    public async delete(id: string) {}
  
  }