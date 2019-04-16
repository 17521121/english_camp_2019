var mongoose = require("mongoose");

var qrcode = new mongoose.Schema({
  data: {
    type: String
  },
  fullname: {
    // required: true,
    type: String
  },
  clb: {
    // required: true,
    type: String
  },
  university: {
    type: String
  },
  numOfJoiningStaff: {
    type: Number 
  },
  staffId: [{
    type: String
  }],
  rank: {
    type: Number
  }
});

module.exports = qrcode;
