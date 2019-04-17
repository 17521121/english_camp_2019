var router = require("express").Router();
var mongoose = require('mongoose')
var _ = require('lodash')
router.get('/logout', require('./logout'))

router.get('/status', async (req, res, next) => {
  try {
    let qrcodes = await mongoose.model('qrcode').find({}, { '__v': 0, '_id': 0, 'staffId': 0})
    return res.render('adminpage/users/status', { qrcodes: qrcodes })
  }
  catch (err) {
    next();
  }
})
router.post('/status/getData', async (req, res, next) => {
  try {
    let qrcodes = await mongoose.model('qrcode').find({}, { '__v': 0, '_id': 0, 'staffId': 0})
    return res.json(qrcodes)
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
        return res.send("Đã checkin rồi!")
      }
      else {
        await qrcode.staffId.push(req.user.position);
        qrcode.numOfJoiningStaff++;
        //Cập nhật lại rank
        let qrcodes = await mongoose.model('qrcode').find()
        let i = qrcodes.length;
        for (let j of qrcodes) {
          if (j.data != qrcode.data && j.numOfJoiningStaff < qrcode.numOfJoiningStaff) {
            i--;
          }
          console.log(_.isEqual(j,qrcode))
        }
        qrcode.rank = i;
        await qrcode.save();
        return res.send("Checkin thành công");
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
    let qrcode = await mongoose.model('qrcode').create(insert)
    qrcode.numOfJoiningStaff = 0;
    //Cập nhật rank:
    qrcode.rank = await mongoose.model('qrcode').count();

    qrcode.staffId = []
    await qrcode.save()
    return res.send("Đăng kí tham dự thành công!")
  }
  catch (err) {
    next()
  }
})


module.exports = router;