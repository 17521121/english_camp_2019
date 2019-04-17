var router = require("express").Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var { IS_ADMIN } = require("config/index");
router.get("/", async (req, res, next) => {
  let insert = [
    {
      username: "congtacvien1",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    },
    {
      username: "congtacvien2",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien3",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien4",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien5",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien6",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien7",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien8",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien9",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien10",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien11",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
    }, {
      username: "congtacvien12",
      password: "123",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: "Giang hàng 1"
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
