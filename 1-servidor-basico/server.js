const http = require ('http');

var servidor = http.createServer(funcionServer);

function funcionServer (request,response){
    console.log('request.url: ',request.url);
    console.log('request.method: ',request.method);
    console.log('request.statusCode: ',request.statusCode);

    if(request.url === '/json'){
        response.writeHead(200,{'content-type':'application/json'});
        //response.json({"rta":"HOLA MUNDIS"}) --->ERROR: SOLO PARA EXPRESS
        //response.send({"rta":"HOLA MUNDIS"}) --->ERROR: SOLO PARA EXPRESS
        response.end('{"rta":"HOLA MUNDIS"}')
    }
    if(request.url === '/'){        
        response.writeHead(200,{'content-type':'application/json'});
        response.end('TODO BIEN ->CHAU MUNDO')
    }
}

servidor.listen(5000);