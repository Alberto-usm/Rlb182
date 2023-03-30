const express = require('express');
const mysqlConnetion = require('../../config');
const {promisify} = require('util');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const { route } = require('../routes/login');


const getUsuario = async (req, res) => {
    
    mysqlConnetion.query('SELECT * FROM Usuario',(err,rows) => {       
     if(!err){
         res.json(rows);         
     }else{
         console.log(err);
     }
 })    
};

const singin  = async(req, res) => {    
   const  { user , password} = req.body;  
   const datos = req.body; 
        
   mysqlConnetion.query('SELECT * FROM Usuario WHERE rutUser=?',   
   [user], function(err, rows, fields) {
       if(rows.length > 0){
           console.log(rows[0])
           var pass = rows[0].passwordUser 
           bcrypt.compare(req.body.password, pass, function(err, result){
               if(result){                        
                   let data = JSON.stringify(rows[0]);
                   console.log(data)
                   const token = jwt.sign(data, 'uriel');
                   console.log(token);
                   res.status(200).send({data:user,token});
                   /*res.json(token);*/
                            
                  
               }else{
                   res.status(200).send({message:'Usuario o password incorrectos', data:undefined});
                
               }
           })
       }else{
            res.status(200).send({message:'Usuario o password incorrectos', data:undefined});
       }
       
   })
       
};

  
  /*
    if(!err){
        if(rows.length > 0){
            let data = JSON.stringify(rows[0]);
            const token = jwt.sign(data, 'uriel');
            res.json({token});
        }else{
            res.json('Usuario o password incorrectos')
    
        }         
    }else{
        console.log(err) 
        res.json('Usuario o password incorrectos')  
     }
     */
 

/*
if(!err){
    if(rows.length > 0){
        let data = JSON.stringify(rows[0]);
        const token = jwt.sign(data, 'uriel');
        res.json({token});
    }else{
        res.json('Usuario o password incorrectos')

    }         
}else{
    console.log(err) 
    res.json('Usuario o password incorrectos')  
 }
 */

const testing = (req, res) => {
    
    if(!req.headers.authorization)  return res.status(401).json('No autorizado');
    
    const token = req.headers.authorization.substr(7);
    if(token !== ''){
        const content = jwt.verify(token, 'uriel');
        console.log(content);
    }
        
        
}


module.exports = {
    getUsuario,
    singin,
    testing
    
    
}
