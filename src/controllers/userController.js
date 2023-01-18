const express = require('express');
const mysqlConnetion = require('../../config');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const {promisify} = require('util');

const viewUsers = async (req, res) => {
    mysqlConnetion.query('SELECT * FROM USER', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })  
};

const viewOneUser = (req, res) => {
   
       mysqlConnetion.query('SELECT * FROM USER WHERE idUser = ?',[req.params.id],
       (err,rows) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
};


const changeUser = ( req, res) => {
       
    mysqlConnetion.query('UPDATE USER SET ? WHERE idUser = ?', [req.body,req.params.id],
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
    
    mysqlConnetion.query('INSERT INTO USER SET ?' , {rutUser: rutUser, nameUser:nameUser, passwordUser:passwordHash, rol:rol, grado:grado},
    (err, rows) =>{
        if(!err){
            res.json(rows);
           
        }else{
            console.log(err);
        }
    })
};

const deleteUser = (req, res) => {
    
    mysqlConnetion.query('DELETE FROM USER WHERE idUser = ?', [req.params.id],
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
    insertUser,
    deleteUser
    
}


