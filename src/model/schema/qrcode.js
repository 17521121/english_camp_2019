var mongoose = require("mongoose");

var qrcode = new mongoose.Schema({
  fullname: {
    // required: true,
    type: String
  },
  MSSV: {
    // required: true,
    type: String
  },
  isValid: {
    // required: true,
    type: Boolean
  },
  university: {
    type: String
  },
  numOfJoiningStaff: {
    type: Number 
  },
  rank: {
    type: Number
  }
});

module.exports = qrcode;
