const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const session = require("express-session");

const actividadRoute = require('./src/routes/actividad');
const userRoute = require('./src/routes/user');
const documentoRoute = require('./src/routes/documento');
const cargoRoute = require('./src/routes/cargo');
const gradoRoute = require('./src/routes/grado');
const camaraRoute = require('./src/routes/camara');
const mensajeriaRouter = require('./src/routes/mensajeria');
const correoRouter = require('./src/routes/correo');
const agendaRouter = require('./src/routes/agenda');
const logindRouter = require('./src/routes/login');
const tenidaRouter = require('./src/routes/tenida');



//para procesar datos enviados desde forms
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use('/actividad',actividadRoute);
app.use('/user',userRoute);
app.use('/cargo',cargoRoute);
app.use('/grado',gradoRoute);
app.use('/camara',camaraRoute);
app.use('/documento',documentoRoute);
app.use('/correo',correoRouter);
app.use('/login',logindRouter);
app.use('/tenida',tenidaRouter);





module.exports = app;