/*import * as express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!12aabbbaa');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));*/

/*
class ClassA {
    public async test1():Promise<string> {
        return "123";
    }
    public async test2():Promise<string> {
        return "3333";
    }

}


async function test() {
    var a = new ClassA();
    //var b = await a.test1();
    a.test1().then(rt =>{
        console.debug(rt);
    });
    
    var c = await a.test2();
    console.debug(c);
}*/

//test();
import * as axios from 'axios'

async function test() {
    console.debug("123");
    var out = await axios.default.get('https://www.sina.com.cn');
    console.debug(out.data);

}


test();
