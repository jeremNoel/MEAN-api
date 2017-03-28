'use strict';

// Router = express.Router
// import {Router} from 'express';
const Router = require('express').Router;
const bodyParser = require('body-parser');

const apiRoutes = new Router();
apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const users = require('./controllers/users');

apiRoutes.get('/users', users.find);
apiRoutes.post('/users', users.create);

module.exports = apiRoutes;