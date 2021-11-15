const express = require('express');

// Controllers
const ClienteController = require('./controllers/ClienteController');

const routes = express.Router();

// Rotas
routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.create);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);
routes.get('/clientes/:id', ClienteController.buscaId);

module.exports = routes;