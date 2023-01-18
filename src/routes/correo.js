const express = require('express');
const mailController = require('../controllers/mailController');
const app = express();


const envio = require('../controllers/mailController');



app.post('/', mailController.envioCorreo); 



 module.exports = app;

