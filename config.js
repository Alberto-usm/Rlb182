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
        
    host: process.env.DB_HOST,
    user : process.env.DB_USER ,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE || 'rlb182',
    puerto : process.env.DB_PUERTO || 3306 
    
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