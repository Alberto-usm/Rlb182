const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');


const viewTenida = (req, res) => {
    mysqlConnetion.query('SELECT * FROM Tenida', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })      
};

const viewOneTenida = (req, res) => {
   
       console.log(req.body)
       console.log('ViewOne')       
       /*mysqlConnetion.query('SELECT * FROM Tenida WHERE idTenida = ?',[req.params.id]*/
       mysqlConnetion.query('SELECT * FROM Tenida WHERE idUser = ? and idActividad = ?',[req.body.idUser, req.body.idActividad],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};
const changeTenida = ( req, res) => {
        
    mysqlConnetion.query('UPDATE Tenida SET ? WHERE idTenida = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertTenida =  async (req, res) => {
                    
   mysqlConnetion.query('INSERT INTO Tenida SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
};

const deleteTenida = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Tenida WHERE idTenida = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

module.exports = {
    viewTenida,
    viewOneTenida,
    changeTenida,
    insertTenida,
    deleteTenida
}
