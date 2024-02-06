import http from 'http';
import myDateTime  from './module/module.js';


http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("Today is the day"+ myDateTime())
    res.end("Hello world!")      
}).listen(8080);