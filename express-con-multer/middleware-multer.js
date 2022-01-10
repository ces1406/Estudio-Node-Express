const multer = require ("multer");
const path = require("path");

const almacen = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'./archivos'))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const filtro = (req,file,cb)=>{
    const fileTypes = /jpeg|png|wep|jpg/;
    const mimeTypes = fileTypes.test(file.mimetype); // chequear que el mimetype del archivo que llega concuerda con los definidos en fileTypes
    const extension = fileTypes.test(path.extname(file.originalname)).tolowercase(); // chequear la extension del archivo q llega segun los definidos en fileTypes

    if(mimeTypes && extension){ // si todo esta ok:
        return cb(null,true)
    }else{
        return cb("imagen no soportada",false)
    }
};

const cargarImg = multer({
    storage: almacen,
    limits: {filesize:50000},
    fileFilter: filtro
});

cargarImg.single('avatarImg');

module.exports = cargarImg;