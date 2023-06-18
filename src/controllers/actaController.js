const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');
const { join } = require('path');
const { param } = require('../routes/actividad');
const multer = require('multer');


const viewActas = (req, res) => {
    mysqlConnetion.query('SELECT * FROM Acta', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const filterActas = (req, res) => {
    if (req.params.idGrado == 'A'){
        SQL= "SELECT * FROM Acta WHERE idGrado IN('A')"
    }   
    if(req.params.idGrado == 'C'){
            SQL= "SELECT * FROM Acta WHERE idGrado IN('A','C')"
    }
    if(req.params.idGrado == 'M'){
            SQL= "SELECT * FROM Acta WHERE idGrado IN('A','C','M')" 
    }
    
    mysqlConnetion.query(SQL,(err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const viewOneActa = (req, res) => {
   
    mysqlConnetion.query('SELECT * FROM Acta WHERE idAct = ?',[req.params.id],
    (err,rows) => {
     if(!err){
         res.json(rows);
    
     }else{
         console.log(err);
     }
 })    
};
const changeActa = ( req, res) => {
       
    mysqlConnetion.query('UPDATE Acta SET ? WHERE idAct = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertActa =  async (req, res) => {
    mysqlConnetion.query('INSERT INTO Acta SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
  
};

const deleteActa = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Acta WHERE idAct = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const bajadaActa = (req, res) => {
    let archivo = './documentos';
    let nombre = req.params.filename;
    let ruta = archivo + '/' + nombre;   
    res.download(ruta)
    
}  

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'documentos')
    },
    filename: ( req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})
const subida = upload.single('myFile');

const uploadActa = ( req, res) =>{

      res.json('Enviando archivo')  
   
} 
   
module.exports = {
    viewActas,
    filterActas,
    bajadaActa,
    viewOneActa,
    changeActa,
    insertActa,
    deleteActa,
    uploadActa,
    subida
   
}