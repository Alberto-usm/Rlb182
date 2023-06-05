const express = require('express');
const nodeMailer = require('nodemailer');
require ('dotenv').config({path: '.env'})

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



 const envioCorreo = (req, res) =>{
    
     let trasporter = nodeMailer.createTransport({
         
         //host:'premium99.web-hosting.com',
         host:'smtp.gmail.com',
         //post:465,
         post:587,  
         secure: true,      
         auth:{
             //user: 'info@labusqueda182.com',
             //pass:'#L3@R4cIn*6M'
             user:'alberto.cabello64@gmail.com',
             pass:'AltMati2308'
         },
         connectionTimeout: 30000
     });

     const mailOpciones = {
        from:'Logia',
        to: req.body.email,
        subjet: req.body.asunto,
        text: req.body.mensaje
     };

     trasporter.sendMail(mailOpciones,function(err,res){
        if(err) {
            console.log(req.body)
            console.log(err)
        }else{
            console.log('iii')
            console.log('Correo enviado')
            
        }  
       
     })
    }

    module.exports = {
        envioCorreo
    }
        
