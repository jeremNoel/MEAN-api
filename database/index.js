'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const users = require('./models/users.js');

const db = {
  users: mongoose.model('Users', users);
}

module.exports = db;

// const Users = db.users
// Users.find
// new Users()