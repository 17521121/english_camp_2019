var router = require("express").Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var { IS_ADMIN } = require("config/index");
router.get("/", async (req, res, next) => {
  let insert = [
    {
      username: "checkin14",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 1",
      position: "Gian hàng 1"
    }, {
      username: "checkin15",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 2",
      position: "Gian hàng 2"
    }, {
      username: "checkin16",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 3",
      position: "Gian hàng 3"
    }, {
      username: "checkin17",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 4",
      position: "Gian hàng 4"
    }, {
      username: "checkin18",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 5",
      position: "Gian hàng 5"
    }, {
      username: "checkin19",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 6",
      position: "Gian hàng 6"
    }, {
      username: "checkin20",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 7",
      position: "Gian hàng 7"
    }, {
      username: "checkin21",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 8",
      position: "Gian hàng 8"
    }, {
      username: "checkin22",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 9",
      position: "Gian hàng 9"
    }, {
      username: "checkin23",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 10",
      position: "Gian hàng 10"
    }, {
      username: "checkin24",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 11",
      position: "Gian hàng 11"
    }, {
      username: "checkin25",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 12",
      position: "Gian hàng 12"
    }, {
      username: "checkin26",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 13",
      position: "Gian hàng 13"
    },

  ];
  const saltRounds = 10;
  for (let i of insert) {
    let hash = await bcrypt.hash(i.password, saltRounds)
    console.log(i)
    i.password = hash;
  }
  let createUsers = await mongoose.model("users").insertMany(insert);

  return res.send("Done");
});

module.exports = router;
