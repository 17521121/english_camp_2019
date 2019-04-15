var mongoose = require("mongoose");

var qrcode = new mongoose.Schema({
  facebookId: {
    required: true,
    type: String
  },
  fullname: {
    // required: true,
    type: String
  },
  isValid: {
    // required: true,
    type: String
  },
  avatar: {
    type: String
  },
  staffId: {
    type: String,
    require: true
  },
  numOfJoiningStaff: {
    type: Number,
  },
  rank: {
    type: Number,
    default: 0
  }
});

module.exports = qrcode;
