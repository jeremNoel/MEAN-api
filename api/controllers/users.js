'use strict';

const UserModel = require('../../database').users;

const userController = {
  find : (req, res) => {
    //recette/operation sur la base de données
    UserModel.find()
    .then( data => {
      res.send('Operation success ::: ' + data);
    })
    .catch( err => {
      res.send('Operation failed ::: ' + err);
    });
  },

  create : (req, res) => {
    const newUser = new UserModel(req.body);
    newUser.save()
    .then( data => {
      res.send('Operation success ::: ' + data);
    })
    .catch( err => {
      res.send('Operation failed ::: ' + err);
    });
  }

}

module.exports = userController;