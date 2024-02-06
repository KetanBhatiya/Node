import fs from 'fs';

fs.appendFile('./files/new.txt',"File content!",(err)=>{
    if(err) throw err;
    console.log("saved!")
})