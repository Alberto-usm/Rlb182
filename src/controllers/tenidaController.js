const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');


const viewTenida = (req, res) => {
    mysqlConnetion.query('SELECT * FROM TENIDA', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })      
};

const viewOneTenida = (req, res) => {
   
       mysqlConnetion.query('SELECT * FROM TENIDA WHERE idTenida = ?',[req.params.id],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};
const changeTenida = ( req, res) => {
        
    mysqlConnetion.query('UPDATE TENIDA SET ? WHERE idTenida = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertTenida =  async (req, res) => {
                    
   mysqlConnetion.query('INSERT INTO TENIDA SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
};

const deleteTenida = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM TENIDA WHERE idTenida = ?', [req.params.id],
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
