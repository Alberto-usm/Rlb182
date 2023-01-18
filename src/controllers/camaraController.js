const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');


const viewCamara = (req, res) => {
    mysqlConnetion.query('SELECT * FROM CAMARA', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })      
};

const viewOneCamara = (req, res) => {
   
       mysqlConnetion.query('SELECT * FROM CAMARA WHERE idCamara = ?',[req.params.id],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};
const changeCamara = ( req, res) => {
        
    mysqlConnetion.query('UPDATE CAMARA SET ? WHERE idCamara = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertCamara =  async (req, res) => {
                    
   mysqlConnetion.query('INSERT INTO CAMARA SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
};

const deleteCamara = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM CAMARA WHERE idCamara = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

module.exports = {
    viewCamara,
    viewOneCamara,
    changeCamara,
    insertCamara,
    deleteCamara
}
