require('dotenv').config();

const { Server } = require('./src/services');

const server = new Server();

server.listen();
