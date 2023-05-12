const express = require('express');
const mysqlConnetion = require('../../config');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const {promisify} = require('util');
//const { param } = require('../routes/usuario');

const viewUsers = async (req, res) => {
    //mysqlConnetion.query("SELECT *, date_format(fechaNacimiento,'%e/%m/%Y') as fechaNacimiento, date_format(fechaIniciacion,'%e/%m/%Y') as fechaIniciacion FROM Usuario", (err, rows, fields) =>{
    mysqlConnetion.query("SELECT *  FROM Usuario", (err, rows, fields) =>{    
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const viewOneUser = (req, res) => {
   
       //mysqlConnetion.query("SELECT *, date_format(fechaNacimiento, '%e/%m/%Y') as fechaNacimiento, date_format(fechaIniciacion,'%e/%m/%Y') as fechaIniciacion FROM Usuario WHERE idUser = ?",[req.params.id],
       mysqlConnetion.query("SELECT * FROM Usuario WHERE idUser = ?",[req.params.id],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};


const changeUser = ( req, res) => {
       
    mysqlConnetion.query('UPDATE Usuario SET ? WHERE idUser = ?', [req.body,req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

const changePassword = async ( req, res) => {
    const passwordUserCh = req.body.passwordUser    
    let passwordHash = await bcryptjs.hash(passwordUserCh, 9)
    
    mysqlConnetion.query('UPDATE Usuario SET passwordUser = ? WHERE idUser = ?', [passwordHash, req.params.id],        
    (err, rows) =>{    
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
   
}


const insertUser =  async (req, res) => {
      
    const rutUser = req.body.rutUser
    const nameUser = req.body.nameUser
    const passwordUser = req.body.passwordUser
    const rol = req.body.rol
    const grado = req.body.grado
    
    let passwordHash = await bcryptjs.hash(passwordUser, 9)
    
    mysqlConnetion.query('INSERT INTO Usuario SET ?' , {rutUser: rutUser, nameUser:nameUser, passwordUser:passwordHash, rol:rol, grado:grado},
    (err, rows) =>{
        if(!err){
            res.json(rows);
           
        }else{
            console.log(err);
        }
    })
};

const deleteUser = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM Usuario WHERE idUser = ?', [req.params.id],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}

module.exports = {
    viewUsers,
    viewOneUser,
    changeUser,
    changePassword,
    insertUser,
    deleteUser
    
}


