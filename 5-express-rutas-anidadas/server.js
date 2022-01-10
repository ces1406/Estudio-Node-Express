const express = require('express');

const app = express();

app
    .get('/',(req,res,next)=>{
        console.log('/-->GET');
        res.send("HOME")
    })

app.listen(5000,()=>{console.log('servidor corriendo...')})