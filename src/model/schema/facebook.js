var mongoose = require("mongoose");

var facebook = new mongoose.Schema({
  facebookId: {
    required: true,
    type: String
  },
  accessToken: {
    // required: true,
    type: String
  },
  refreshToken: {
    // required: true,
    type: String
  },
  email: {
    // required: true,
    type: String
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  userAvatar: {
    type: String
  },
  cover: {
    type: String
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: null
  }
});

module.exports = facebook;
