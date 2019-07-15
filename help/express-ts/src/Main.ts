import { Request, Response, Express} from 'express'
import * as bodyParser from 'body-parser'
import * as express from 'express';

var app:Express = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.get('/test',function(req:Request,res:Response){
  var data = {id:100};
  res.send(data);
  res.end();
});
app.post('/test',function(req:Request,res:Response){
  //console.log(req.body);
  var data = {id:100};
  res.send(data);
  res.end();
});
app.listen(3000,function(){
    console.log("App Started on PORT 3000");
});