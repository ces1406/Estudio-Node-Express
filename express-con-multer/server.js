const express = require("express");
const app = express();
const cargarImg = require('./middleware-multer')


app.get('/',(req,res,next)=>{
    console.log('GET-> / ');
    res.json({rta:"hola mundillo"})
})
app.post('/',
    (req,res,next)=>{
        cargarImg(req,res,err=>{
            if(err){
                res.status(404).send({msg:'ERROR DE SUBIDA'});
                next(err)
            }else{
                next();
            }
        })
    },
    (req,res,next)=>{
        console.log('POST-> /');
        res.json({rta:'archivo subido'});
    }
);


app.listen(5000,()=>console.log('servidor ejecutandose...'));