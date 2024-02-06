import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
    fs.readFile("./files/readme.txt",(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data)
        return res.end();
    })
}).listen(8080)