const express = require("express");
const route = express.Router();

const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');

//Rotas da Home
route.get('/', homeController.index);

//Rotas de login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;