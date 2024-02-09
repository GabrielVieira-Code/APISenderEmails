const express = require('express');
const router = require('./router');
const connection = require('./Models/connection.js');
const app = express(); // Criando uma instância do aplicativo Express

// Configuração para usar JSON
app.use(express.json());

// Usando o router
app.use(router);

module.exports = app;
//////

