const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');


const viewCamara = (req, res) => {
    mysqlConnetion.query('SELECT * FROM Camara', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })      
};

const viewOneCamara = (req, res) => {
   
       mysqlConnetion.query('SELECT * FROM Camara WHERE idCamara = ?',[req.params.id],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};
const changeCamara = ( req, res) => {
        
    mysqlConnetion.query('UPDATE Camara SET ? WHERE idCamara = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertCamara =  async (req, res) => {
                    
   mysqlConnetion.query('INSERT INTO Camara SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
};

const deleteCamara = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Camara WHERE idCamara = ?', [req.params.id],
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
