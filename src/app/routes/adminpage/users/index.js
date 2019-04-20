var router = require("express").Router();
var mongoose = require('mongoose')
var _ = require('lodash')
router.get('/logout', require('./logout'))

router.get('/status', async (req, res, next) => {
  try {
    let qrcodes = await mongoose.model('qrcode').find({}, { '__v': 0, '_id': 0, 'staffId': 0 })
    return res.render('adminpage/users/status', { qrcodes: qrcodes })
  }
  catch (err) {
    next();
  }
})
router.post('/status/getUniversity', async (req, res, next) => {
  try {
    let universities = await mongoose.model('university').find({})
    return res.json(universities)
  }
  catch (err) {
    next();
  }
})
router.post('/status/getCLB', async (req, res, next) => {
  try {
    let universities = await mongoose.model('university').find({})
    return res.json(universities)
  }
  catch (err) {
    next();
  }
})
router.post('/status/getData', async (req, res, next) => {
  try {
    let qrcodes = await mongoose.model('qrcode').find({}, { '__v': 0, '_id': 0, 'staffId': 0 })
    return res.json(qrcodes)
  }
  catch (err) {
    next();
  }
})

router.post('/status/reset', async (req, res, next) => {
  try {
    let qrcode = await mongoose.model('qrcode').deleteMany({})
    return res.send("Done")
  }
  catch (err) {
    next();
  }
})

router.get('/status/:id', async (req, res, next) => {
  try {
    let qrcode = await mongoose.model('qrcode').findOne({ data: req.params.id })
    if (!_.isEmpty(qrcode)) {
      //Checkin
      if (qrcode.staffId.indexOf(req.user.position) > -1) {   //Check xem có checkin ở đây chưa
        return res.send('<p style="text-align: center; margin-top: 40vh; font-size:100px; color: green;">Đã checkin ở gian này rồi!</p>')
      }
      else {
        if (req.user.position === undefined || req.user.position =="" ) {
          return res.send( '<p style="text-align: center; margin-top: 40vh; font-size:100px; color: green;">Tài khoản của bạn không thể checkin!</p>')
        }
        await qrcode.staffId.push(req.user.position);
        qrcode.numOfJoiningStaff++;
        //Cập nhật lại rank
        let qrcodes = await mongoose.model('qrcode').find()
        let i = qrcodes.length;
        for (let j of qrcodes) {
          if (j.data != qrcode.data && j.numOfJoiningStaff < qrcode.numOfJoiningStaff) {
            i--;
          }
          console.log(_.isEqual(j, qrcode))
        }
        qrcode.rank = i;
        await qrcode.save();
        return res.send('<p style="text-align: center; margin-top: 40vh; font-size:100px; color: green;">Checkin thành công!</p>');
      }
    }
    else {
      let universities = await mongoose.model('university').find()
      return res.render('adminpage/users/checkin', { universities: universities, data: req.params.id })
    }
  }
  catch (err) {
    console.log(err)
    next()
  }
})

//Tạo qrcode liên kết người dùng
router.post('/status', async (req, res, next) => {
  try {
    let insert = { ...req.body }
    if (insert.university[0] == "others") {
      insert.university = insert.university[1]
    } else {
      insert.university = insert.university[0]
    }
    if (insert.clb[0] == "others") {
      insert.clb = insert.clb[1]
    } else {
      insert.clb = insert.clb[0]
    }
    await console.log(insert)
    let qrcode = await mongoose.model('qrcode').create(insert)
    qrcode.numOfJoiningStaff = 0;
    //Cập nhật rank:
    qrcode.rank = await mongoose.model('qrcode').count();

    qrcode.staffId = []
    await qrcode.save()
    return res.send('<p style="text-align: center; margin-top: 40vh; font-size:100px; color: green;">Đăng kí tham dự thành công!</p>')
  }
  catch (err) {
    console.log(err)
    next()
  }
})


module.exports = router;