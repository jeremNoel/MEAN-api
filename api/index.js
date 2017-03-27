'use strict';

// Router = express.Router
// import {Router} from 'express';
const {Router} = require('express');
const bodyParser = require('body-parser');

const apiRoutes = new Router();
apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const users = require('./controllers/users');

// autres routes
// apiRoutes.post
apiRoutes.get('/users', users.find);

module.exports = apiRoutes;