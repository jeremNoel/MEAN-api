'use strict';

const Users = require('../../database').users;
const Comments = require('../../database').comments;
const Shops = require('../../database').shops;

const users = {
  find : (req, res) => {
    //recette/operation sur la base de données
    Users.find()
    .then( data => {
      res.send('Operation success ::: ' + data);
    })
    .catch( err => {
      res.send('Operation failed ::: ' + err);
    });
  },

  create : (req, res) => {
    const user = new Users(req.body);
    user.save()
    .then( data => {
      res.send('Operation success ::: ' + data);
    })
    .catch( err => {
      res.send('Operation failed ::: ' + err);
    });
  }

}

module.exports = users;