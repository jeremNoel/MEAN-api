'use strict';

const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
  mail: {
    type: String,
    lowercase: true,
    unique: true,
    required: true 
  },
  hash: {
  	type: String,
  	unique: true,
  	required: true
  }
});