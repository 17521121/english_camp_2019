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
    type: String
  },
  university: {
    type: String
  },
  staffId: {
    type: String 
     
  },
  rank: {
    type: Number
  }
});

module.exports = qrcode;
