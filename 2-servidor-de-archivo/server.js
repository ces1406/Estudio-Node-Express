const http = require ('http');
const fs = require('fs');

var servidor = http.createServer(funcionServer);

function funcionServer (request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    fs.readFile('./servidor-de-archivo/data.txt',(err,data)=>{
        if(err){
            console.log(err)
            response.end("Error al leer el archivo: ")
        }else{
            response.write(data);
            response.end()
        }
    })
}

servidor.listen(5000);