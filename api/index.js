'use strict';

// Router = express.Router
// import {Router} from 'express';
const Router = require('express').Router;
const bodyParser = require('body-parser');

const apiRoutes = new Router();
apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const userController = require('./controllers/users');
const products = require('./controllers/products');

apiRoutes.get('/users', userController.find);
apiRoutes.post('/users', userController.create);


apiRoutes.get('/products', products.find);

module.exports = apiRoutes;