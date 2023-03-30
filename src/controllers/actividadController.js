const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');


const viewActividad = async (req, res) => {
    mysqlConnetion.query('SELECT * FROM Actividad', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })      
};

const viewOneActividad= (req, res) => {
   
       mysqlConnetion.query('SELECT * FROM Actividad WHERE idActividad = ?',[req.params.id],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};
const changeActividad = ( req, res) => {
        
    mysqlConnetion.query('UPDATE Actividad SET ? WHERE idActividad = ?', [req.body, req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const insertActividad =  async (req, res) => {
                    
   mysqlConnetion.query('INSERT INTO Actividad SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
};

const deleteActividad = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Actividad WHERE idActividad = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

module.exports = {
    viewActividad,
    viewOneActividad,
    changeActividad,
    insertActividad,
    deleteActividad
}
