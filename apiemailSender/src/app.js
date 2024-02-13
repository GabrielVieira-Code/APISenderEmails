const express = require('express');
const cors = require('cors');
const router = require('./router');
const connection = require('./Models/connection.js');
const app = express(); // Criando uma instância do aplicativo Express
const bodyParser = require('body-parser');

// Configuração para usar JSON
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// Usando o router
app.use(router);

module.exports = app;
//////

