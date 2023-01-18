const express = require('express');
const nodeMailer = require('nodemailer');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



 const envioCorreo = (req, res) =>{
    
     let trasporter = nodeMailer.createTransport({
         
         host:'smtp.hotmail.com',
         post:587,
         secure:false,
         
        /*service: 'gmail',    */
         auth:{
             user:'albertocabello64@hotmail.com',
             pass:'AltMati2308'
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
            console.log('aqui')
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
        
