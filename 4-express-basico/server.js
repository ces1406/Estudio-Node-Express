const express = require('express');

const app = express();
app.set('puerto',process.env.PORT || 5000);
//const port = process.env.PORT || 5000;

app
    // Un pedido GET básico:
    .get('/',(req,res,next)=>{
        console.log('->GET /')
        res.end('Hola mundo')
    })
    // Un pedido GET que responde con un json:
    .get('/json',(req,res,next)=>{
        console.log('->GET /datajson')
        res.json({'rta':'getting /datajson'})
    })
    // Un pedido GET con un parametro "id":
    .get('/data/:id',(req,res,next)=>{
        console.log('->GET /data/params->',req.params);
        if(+req.params.id > 10){
            // Seteando el STATUS:
            res.status(404).send('id incorrecto (mayor a 10)');
        }else{
            let msg= "Recibido el id->"+req.params.id;
            res.json({msg});
        }        
    })
    // Un pedido GET con un query en la url (ej: /query?id=44&name=jose):
    .get('/query',(req,res,next)=>{
        console.log('->GET->req.query:',req.query);
        res.send("OK->llego->req.query.id: "+req.query.id+" - req.query.name: "+req.query.name)
    });

app.listen(app.get('puerto'),()=>{console.log('Servidor lanzado en el puerto '+app.get('puerto'))})