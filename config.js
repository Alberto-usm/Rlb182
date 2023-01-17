const session = require('express-session');
const mysql = require('mysql2');
require('dotenv').config({path: './.env'})
/*
const mysqlConnetion = mysql.createConnection({
    host:    'localhost',
    user: 'labuidrd_acabello',
    password: 'rlb182Sfu',
    database: 'labuidrd_rlb182'
});
*/

const mysqlConnetion = mysql.createConnection({
        
    host: process.env.HOST ,
    user : 'root' ,
    password : process.env.PASSWORD,
    database : process.env.DATABASE 
    
});


mysqlConnetion.connect( err => {
    if(err){
        console.log('Error en DB:', err);
        return;

    }else{
        console.log('DB OK');
    }
});


module.exports = mysqlConnetion;