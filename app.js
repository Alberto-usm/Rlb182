const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const session = require("express-session");

const actividadRoute = require('./src/routes/actividad');
const usuarioRoute = require('./src/routes/usuario');
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
app.use(express.static('documentos'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => res.json('Servidor Running'));

app.get('/bajarArchivo', (req, res) => {
    res.download('./documentos/BateriaSignosPalabra.docx')
})
  


app.use('/api/actividad',actividadRoute);
app.use('/api/cargo',cargoRoute);
app.use('/api/usuario',usuarioRoute);
app.use('/api/grado',gradoRoute);
app.use('/api/camara',camaraRoute);
app.use('/api/documento',documentoRoute);
app.use('/api/correo',correoRouter);
app.use('/api/login',logindRouter);
app.use('/api/tenida',tenidaRouter);





module.exports = app;