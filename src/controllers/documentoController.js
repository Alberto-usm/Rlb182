const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');

const viewDocumentos = (req, res) => {
    mysqlConnetion.query('SELECT * FROM DOCUMENTO ', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const viewOneDocumento = (req, res) => {
   
    mysqlConnetion.query('SELECT * FROM DOCUMENTO WHERE idDoc = ?',[req.params.id],
    (err,rows) => {
     if(!err){
         res.json(rows);
     }else{
         console.log(err);
     }
 })    
};
const changeDocumento = ( req, res) => {
       
    mysqlConnetion.query('UPDATE DOCUMENTO SET ? WHERE idDoc = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertDocumento =  async (req, res) => {
    mysqlConnetion.query('INSERT INTO DOCUMENTO SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
  
};

const deleteDocumento = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM DOCUMENTO WHERE idDoc = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

module.exports = {
    viewDocumentos,
    viewOneDocumento,
    changeDocumento,
    insertDocumento,
    deleteDocumento
}