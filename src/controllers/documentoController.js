const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');
const fs = require('fs');


const viewDocumentos = (req, res) => {
    mysqlConnetion.query('SELECT * FROM Documento', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const filterDocumentos = (req, res) => {
    if (req.params.idGrado == 'A'){
        SQL= "SELECT * FROM Documento WHERE idGrado IN('A')"
    }   
    if(req.params.idGrado == 'C'){
            SQL= "SELECT * FROM Documento WHERE idGrado IN('A','C')"
    }
    if(req.params.idGrado == 'M'){
            SQL= "SELECT * FROM Documento WHERE idGrado IN('A','C','M')" 
    }
    
    mysqlConnetion.query(SQL,(err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const viewOneDocumento = (req, res) => {
   
    mysqlConnetion.query('SELECT * FROM Documento WHERE idDoc = ?',[req.params.id],
    (err,rows) => {
     if(!err){
         res.json(rows);
    
     }else{
         console.log(err);
     }
 })    
};
const changeDocumento = ( req, res) => {
       
    mysqlConnetion.query('UPDATE Documento SET ? WHERE idDoc = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertDocumento =  async (req, res) => {
    mysqlConnetion.query('INSERT INTO Documento SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
  
};

const deleteDocumento = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Documento WHERE idDoc = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const uploadDocumento = ( req, res) =>{

    //Configurar multer
    //Recoger el file a sibir
    if(!req.file){
        return res.status(404).json({
            status: 'error',
            mensaje:'Peticion Invalida'
        })
    }
    
    let archivo = req.file.originalname;    
    let archivo_splip = archivo.split('\.');
    let extension = archivo_splip[1];    
    if(extension != 'pdf' && extension != 'docx'){
        return res.status(400).json({
            status: 'error',
            mensaje: 'Archivo invalido'
        })
    }else{        
        return res.status(200).json({
            status:"success",
            archivo_extension,
            files: req.file    
    
    })
    }
} 

const downloadDocumento = async(req, res) => {
    
    console.log('download')
    
    res.download('./documentos/ManualCompanero.pdf');
    //let filepath = 'documentos';
    //let filename = 'image.png'
    //res.download('./documento/ManualCompanero.pdf');
    //console.log('aqui back')
    if(err){
        console.log(err)        
    }
    //return res.status(200).json({
    //    status: 'Success',
    //    files: req.file
    //})
    
}

module.exports = {
    viewDocumentos,
    filterDocumentos,
    viewOneDocumento,
    changeDocumento,
    insertDocumento,
    deleteDocumento,
    uploadDocumento,
    downloadDocumento
}