var mongoose = require("mongoose");

var university = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  facebookId: [
    {
      // required: true,
      type: mongoose.Schema.ObjectId,
      ref: "facebook"
    }
  ],
  image: {
    type: String
  }
});

module.exports = university;
