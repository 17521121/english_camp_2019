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
  let univeristy = [{"univeristy":"Trường CĐ Bách Việt"},
  {"univeristy":"Trường CĐ Công nghệ thông tin "},
  {"univeristy":"Trường CĐ Công nghệ Thủ Đức"},
  {"univeristy":"Trường CĐ Công thương TP. HCM"},
  {"univeristy":"Trường CĐ Điện lực TP. HCM"},
  {"univeristy":"Trường CĐ Giao thông vận tải 3"},
  {"univeristy":"Trường CĐ Giao Thông vận tải TP. HCM"},
  {"univeristy":"Trường CĐ Kinh tế - Công nghệ TP. HCM"},
  {"univeristy":"Trường CĐ Kinh tế - Kỹ thuật TP. HCM"},
  {"univeristy":"Trường CĐ Kinh tế Đối ngoại TP. HCM"},
  {"univeristy":"Trường CĐ Kinh tế TP. HCM"},
  {"univeristy":"Trường CĐ Kỹ thuật Cao Thắng"},
  {"univeristy":"Trường CĐ Lý Tự Trọng TP. HCM"},
  {"univeristy":"Trường CĐ Nghề TP. HCM"},
  {"univeristy":"Trường CĐ Phát thanh Truyền hình 2"},
  {"univeristy":"Trường CĐ Sư phạm Trung ương TP. HCM"},
  {"univeristy":"Trường CĐ Văn hóa – Nghệ thuật TP. HCM"},
  {"univeristy":"Trường CĐ Xây dựng TP. HCM"},
  {"univeristy":"Trường ĐH Bách khoa – ĐHQG TP. HCM"},
  {"univeristy":"Trường ĐH Công nghệ Sài Gòn"},
  {"univeristy":"Trường ĐH Công nghệ TP. HCM"},
  {"univeristy":"Trường ĐH Công nghệ Thông tin - ĐHQG TP. HCM"},
  {"univeristy":"Trường ĐH Công nghiệp TP. HCM"},
  {"univeristy":"Trường ĐH Công nghiệp Thực phẩm TP. HCM"},
  {"univeristy":"Trường ĐH Giao thông vận tải Phân hiệu tại TP. HCM"},
  {"univeristy":"Trường ĐH Giao thông vận tải TP. HCM"},
  {"univeristy":"Trường ĐH Hoa Sen"},
  {"univeristy":"Trường ĐH Hùng Vương TP. HCM"},
  {"univeristy":"Trường ĐH Kiến trúc TP. HCM"},
  {"univeristy":"Trường ĐH Kinh Tế - Luật – ĐHQG TP. HCM"},
  {"univeristy":"Trường ĐH Kinh tế TP. HCM"},
  {"univeristy":"Trường ĐH Khoa học Tự Nhiên - ĐHQG TP. HCM"},
  {"univeristy":"Trường ĐH Khoa học xã hội và Nhân văn - ĐHQG TP. HCM"},
  {"univeristy":"Trường ĐH Lao động Xã hội CS2"},
  {"univeristy":"Trường ĐH Luật TP. HCM"},
  {"univeristy":"Trường ĐH Mở TP. HCM"},
  {"univeristy":"Trường ĐH Mỹ thuật TP. HCM"},
  {"univeristy":"Trường ĐH Nông Lâm TP. HCM"},
  {"univeristy":"Trường ĐH Ngân Hàng TP. HCM"},
  {"univeristy":"Trường ĐH Ngoại ngữ - Tin học "},
  {"univeristy":"Trường ĐH Ngoại thương CS2"},
  {"univeristy":"Trường ĐH Nguyễn Tất Thành"},
  {"univeristy":"Trường ĐH Quốc tế - ĐHQG TP. HCM"},
  {"univeristy":"Trường ĐH Quốc tế Hồng Bàng"},
  {"univeristy":"Trường ĐH Sài Gòn"},
  {"univeristy":"Trường ĐH Sư phạm kỹ thuật TP. HCM"},
  {"univeristy":"Trường ĐH Sư phạm TP. HCM"},
  {"univeristy":"Trường ĐH Sư Phạm Thể dục thể thao TP. HCM"},
  {"univeristy":"Trường ĐH Tài chính - Marketing"},
  {"univeristy":"Trường ĐH Tài nguyên Môi trường"},
  {"univeristy":"Trường ĐH Tôn Đức Thắng"},
  {"univeristy":"Trường ĐH Thể dục Thể thao TP. HCM"},
  {"univeristy":"Trường ĐH Văn Hiến"},
  {"univeristy":"Trường ĐH Văn hóa TP. HCM"},
  {"univeristy":"Trường ĐH Văn Lang"},
  {"univeristy":"ĐH Y dược TP. HCM"},
  {"univeristy":"Trường ĐH Y Khoa Phạm Ngọc Thạch"},
  {"univeristy":"HV Hàng không Việt Nam"},
  {"univeristy":"HV Hành chính Quốc gia Phân viện tại TP. HCM"}]
  await univeristy.map(async item => {
    console.log(item)
    let items = await mongoose.model('university').create({ name: item.univeristy })
    console.log(items)
  })
  return res.send("Done");
});

module.exports = router;
