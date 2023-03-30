const express = require('express');
const nodeMailer = require('nodemailer');
require ('dotenv').config({path: '.env'})

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



 const envioCorreo = (req, res) =>{
    
     let trasporter = nodeMailer.createTransport({
         
         host:'premium99.web-hosting.com',
         post:465,   
         secure: true,      
         auth:{
             user: 'info@labusqueda182.com',
             pass:'AltRlb182t23'
         }
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
        
