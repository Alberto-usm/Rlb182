const http = require('http');
const app = require('./app');
require ('dotenv').config({path: '.env'})


const server = http.createServer(app);

//Server
server.listen(process.env.PORT);