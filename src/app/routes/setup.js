var router = require("express").Router();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var { IS_ADMIN } = require('config/index')
router.get("/",  async (req, res, next) => {
  let insert = {
    username: "ducnm98",
    password: "123",
    roles: [IS_ADMIN],
    fullname: "Nguyễn Minh Đức"
  };
  const saltRounds = 10;
  bcrypt.hash(insert.password, saltRounds, async (err, hash) => {
    insert.password = hash;
    let usersInfo = await mongoose.model("users").create(insert);
    console.log(usersInfo);
  });
  return success(res, "Done");
});

module.exports = router;
