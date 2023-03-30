const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');



const viewCargo = (req, res) => {
    mysqlConnetion.query('SELECT * FROM Cargo', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const viewOneCargo = (req, res) => {
   
       mysqlConnetion.query('SELECT * FROM Cargo WHERE idCargo = ?',[req.params.id],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};
const changeCargo= ( req, res) => {
       
    mysqlConnetion.query('UPDATE Cargo SET ? WHERE idCargo = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertCargo =  async (req, res) => {
                    
    mysqlConnetion.query('INSERT INTO Cargo SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
};

const deleteCargo = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Cargo WHERE idCargo = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

module.exports = {
    viewCargo,
    viewOneCargo,
    changeCargo,
    insertCargo,
    deleteCargo
}


