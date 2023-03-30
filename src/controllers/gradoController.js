const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');

const viewGrados = (req, res) => {
    mysqlConnetion.query('SELECT * FROM Grado', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const viewOneGrado = (req, res) => {
   
    mysqlConnetion.query('SELECT * FROM Grado WHERE idGrado = ?',[req.params.id],
    (err,rows) => {
     if(!err){
         res.json(rows);
     }else{
         console.log(err);
     }
 })    
};
const changeGrado = ( req, res) => {
       
    mysqlConnetion.query('UPDATE Grado SET ? WHERE idGrado = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertGrado =  async (req, res) => {
    mysqlConnetion.query('INSERT INTO Grado SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
  
};

const deleteGrado = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Grado WHERE idGrado = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

module.exports = {
    viewGrados,
    viewOneGrado,
    changeGrado,
    insertGrado,
    deleteGrado
}
