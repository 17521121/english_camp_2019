var mongoose = require('mongoose');
var schema = require('./schema/index');

module.exports = {
  users: mongoose.model('users', schema.users),
  facebook: mongoose.model('facebook', schema.facebook),
  university: mongoose.model('university', schema.university)
}