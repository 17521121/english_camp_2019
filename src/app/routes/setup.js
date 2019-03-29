var router = require("express").Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var { IS_ADMIN } = require("config/index");
router.get("/", async (req, res, next) => {
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
  let univeristy = [
    {
      university: "Trường CĐ Bách Việt",
      logo: "/homepage/images/university/1.png"
    },
    {
      university: "Trường CĐ Công nghệ thông tin",
      logo: "/homepage/images/university/2.jpg"
    },
    {
      university: "Trường CĐ Công nghệ Thủ Đức",
      logo: "/homepage/images/university/3.png"
    },
    {
      university: "Trường CĐ Công thương TP. HCM",
      logo: "/homepage/images/university/4.png"
    },
    {
      university: "Trường CĐ Điện lực TP. HCM",
      logo: "/homepage/images/university/5.jpg"
    },
    {
      university: "Trường CĐ Giao thông vận tải 3",
      logo: "/homepage/images/university/6.jpg"
    },
    {
      university: "Trường CĐ Giao Thông vận tải TP. HCM",
      logo: "/homepage/images/university/7.jpg"
    },
    {
      university: "Trường CĐ Kinh tế - Công nghệ TP. HCM",
      logo: "/homepage/images/university/8.png"
    },
    {
      university: "Trường CĐ Kinh tế - Kỹ thuật TP. HCM",
      logo: "/homepage/images/university/9.png"
    },
    {
      university: "Trường CĐ Kinh tế Đối ngoại TP. HCM",
      logo: "/homepage/images/university/10.jpg"
    },
    {
      university: "Trường CĐ Kinh tế TP. HCM",
      logo: "/homepage/images/university/11.jpg"
    },
    {
      university: "Trường CĐ Kỹ thuật Cao Thắng",
      logo: "/homepage/images/university/12.png"
    },
    {
      university: "Trường CĐ Lý Tự Trọng TP. HCM",
      logo: "/homepage/images/university/13.JPG"
    },
    {
      university: "Trường CĐ Nghề TP. HCM",
      logo: "/homepage/images/university/14.jpg"
    },
    {
      university: "Trường CĐ Phát thanh Truyền hình 2",
      logo: "/homepage/images/university/15.jpg"
    },
    {
      university: "Trường CĐ Sư phạm Trung ương TP. HCM",
      logo: "/homepage/images/university/16.jpg"
    },
    {
      university: "Trường CĐ Văn hóa – Nghệ thuật TP. HCM",
      logo: "/homepage/images/university/"
    },
    {
      university: "Trường CĐ Xây dựng TP. HCM",
      logo: "/homepage/images/university/18.png"
    },
    {
      university: "Trường ĐH Bách khoa – ĐHQG TP. HCM",
      logo: "/homepage/images/university/19.jpg"
    },
    {
      university: "Trường ĐH Công nghệ Sài Gòn",
      logo: "/homepage/images/university/20.png"
    },
    {
      university: "Trường ĐH Công nghệ TP. HCM",
      logo: "/homepage/images/university/21.jpg"
    },
    {
      university: "Trường ĐH Công nghệ Thông tin - ĐHQG TP. HCM",
      logo: "/homepage/images/university/22.png"
    },
    {
      university: "Trường ĐH Công nghiệp TP. HCM",
      logo: "/homepage/images/university/23.png"
    },
    {
      university: "Trường ĐH Công nghiệp Thực phẩm TP. HCM",
      logo: "/homepage/images/university/24.jpg"
    },
    {
      university: "Trường ĐH Giao thông vận tải Phân hiệu tại TP. HCM",
      logo: "/homepage/images/university/25.jpg"
    },
    {
      university: "Trường ĐH Giao thông vận tải TP. HCM",
      logo: "/homepage/images/university/26.png"
    },
    {
      university: "Trường ĐH Hoa Sen",
      logo: "/homepage/images/university/27.png"
    },
    {
      university: "Trường ĐH Hùng Vương TP. HCM",
      logo: "/homepage/images/university/28.jpg"
    },
    {
      university: "Trường ĐH Kiến trúc TP. HCM",
      logo: "/homepage/images/university/29.png"
    },
    {
      university: "Trường ĐH Kinh Tế - Luật – ĐHQG TP. HCM",
      logo: "/homepage/images/university/30.png"
    },
    {
      university: "Trường ĐH Kinh tế TP. HCM",
      logo: "/homepage/images/university/31.png"
    },
    {
      university: "Trường ĐH Khoa học Tự Nhiên - ĐHQG TP. HCM",
      logo: "/homepage/images/university/32.jpg"
    },
    {
      university: "Trường ĐH Khoa học xã hội và Nhân văn - ĐHQG TP. HCM",
      logo: "/homepage/images/university/33.png"
    },
    {
      university: "Trường ĐH Lao động Xã hội CS2",
      logo: "/homepage/images/university/34.jpg"
    },
    {
      university: "Trường ĐH Luật TP. HCM",
      logo: "/homepage/images/university/35.png"
    },
    {
      university: "Trường ĐH Mở TP. HCM",
      logo: "/homepage/images/university/36.png"
    },
    {
      university: "Trường ĐH Mỹ thuật TP. HCM",
      logo: "/homepage/images/university/37.png"
    },
    {
      university: "Trường ĐH Nông Lâm TP. HCM",
      logo: "/homepage/images/university/38.png"
    },
    {
      university: "Trường ĐH Ngân Hàng TP. HCM",
      logo: "/homepage/images/university/39.png"
    },
    {
      university: "Trường ĐH Ngoại ngữ - Tin học ",
      logo: "/homepage/images/university/40.png"
    },
    {
      university: "Trường ĐH Ngoại thương CS2",
      logo: "/homepage/images/university/41.png"
    },
    {
      university: "Trường ĐH Nguyễn Tất Thành",
      logo: "/homepage/images/university/42.jpg"
    },
    {
      university: "Trường ĐH Quốc tế - ĐHQG TP. HCM",
      logo: "/homepage/images/university/43.png"
    },
    {
      university: "Trường ĐH Quốc tế Hồng Bàng",
      logo: "/homepage/images/university/44.png"
    },
    {
      university: "Trường ĐH Sài Gòn",
      logo: "/homepage/images/university/45.png"
    },
    {
      university: "Trường ĐH Sư phạm kỹ thuật TP. HCM",
      logo: "/homepage/images/university/46.png"
    },
    {
      university: "Trường ĐH Sư phạm TP. HCM",
      logo: "/homepage/images/university/47.png"
    },
    {
      university: "Trường ĐH Sư Phạm Thể dục thể thao TP. HCM",
      logo: "/homepage/images/university/48.png"
    },
    {
      university: "Trường ĐH Tài chính - Marketing",
      logo: "/homepage/images/university/49.png"
    },
    {
      university: "Trường ĐH Tài nguyên Môi trường",
      logo: "/homepage/images/university/50.png"
    },
    {
      university: "Trường ĐH Tôn Đức Thắng",
      logo: "/homepage/images/university/"
    },
    {
      university: "Trường ĐH Thể dục Thể thao TP. HCM",
      logo: "/homepage/images/university/52.jpg"
    },
    {
      university: "Trường ĐH Văn Hiến",
      logo: "/homepage/images/university/53.png"
    },
    {
      university: "Trường ĐH Văn hóa TP. HCM",
      logo: "/homepage/images/university/54.jpg"
    },
    {
      university: "Trường ĐH Văn Lang",
      logo: "/homepage/images/university/55.jpg"
    },
    {
      university: "ĐH Y dược TP. HCM",
      logo: "/homepage/images/university/"
    },
    {
      university: "Trường ĐH Y Khoa Phạm Ngọc Thạch",
      logo: "/homepage/images/university/"
    },
    {
      university: "HV Hàng không Việt Nam",
      logo: "/homepage/images/university/58.png"
    },
    {
      university: "HV Hành chính Quốc gia Phân viện tại TP. HCM",
      logo: "/homepage/images/university/59.png"
    },
    {
      university: ""
    }
  ];
  await univeristy.map(async item => {
    console.log(item);
    let items = await mongoose
      .model("university")
      .create({ name: item.university, image: item.logo });
    console.log(items);
  });
  return res.send("Done");
});

module.exports = router;
