const session = require('express-session');
const mysql = require('mysql2');
require('dotenv').config({path: './.env'})

/*
const mysqlConnetion = mysql.createConnection({
    host:    'localhost',
    user: 'labuidrd_acabello',
    password: 'AltRlb182@23',
    database: 'labuidrd_logia'
});
*/

const mysqlConnetion = mysql.createConnection({
        
    host: process.env.DB_HOST,
    user : process.env.DB_USER ,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE 
    
});

mysqlConnetion.connect( err => {
    if(err){
        console.log('Error en DB:', err);
        return;

    }else{
        console.log('Data Base OK');
    }
});


module.exports = mysqlConnetion;