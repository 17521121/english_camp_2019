var router = require("express").Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var { IS_ADMIN } = require("config/index");
router.get("/", async (req, res, next) => {
  let insert = [
    {
      username: "dangquoctienvktl",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Đặng Quốc Tiến",
      position: "Kĩ thuật"
    },
    {
      username: "ctv1",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 1",
      position: ""
    },
    {
      username: "ctv2",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 2",
      position: ""
    }, {
      username: "ctv3",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 3",
      position: ""
    }, {
      username: "ctv4",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 4",
      position: ""
    }, {
      username: "ctv5",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 5",
      position: ""
    }, {
      username: "ctv6",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 6",
      position: ""
    }, {
      username: "ctv7",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 7",
      position: ""
    }, {
      username: "ctv8",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 8",
      position: ""
    }, {
      username: "ctv9",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 9",
      position: ""
    }, {
      username: "ctv10",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 10",
      position: ""
    }, {
      username: "ctv11",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 11",
      position: ""
    }, {
      username: "ctv12",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Cộng tác viên 12",
      position: ""
    }, {
      username: "checkin1",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 1",
      position: "Gian hàng 1"
    }, {
      username: "checkin2",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 2",
      position: "Gian hàng 2"
    }, {
      username: "checkin3",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 3",
      position: "Gian hàng 3"
    }, {
      username: "checkin4",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 4",
      position: "Gian hàng 4"
    }, {
      username: "checkin5",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 5",
      position: "Gian hàng 5"
    }, {
      username: "checkin6",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 6",
      position: "Gian hàng 6"
    }, {
      username: "checkin7",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 7",
      position: "Gian hàng 7"
    }, {
      username: "checkin8",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 8",
      position: "Gian hàng 8"
    }, {
      username: "checkin9",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 9",
      position: "Gian hàng 9"
    }, {
      username: "checkin10",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 10",
      position: "Gian hàng 10"
    }, {
      username: "checkin11",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 11",
      position: "Gian hàng 11"
    }, {
      username: "checkin12",
      password: "minda",
      roles: IS_ADMIN,
      fullname: "Gian hàng 12",
      position: "Gian hàng 12"
    }, {
      username: "checkin13",
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
