var router = require("express").Router();
var mongoose = require('mongoose')
var _ = require('lodash')
router.get('/logout', require('./logout'))

router.get('/status', async (req, res, next) => {
  try {

    return res.render('adminpage/users/status')
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
      if (req.user.position in qrcode.staffId) {   //Check xem có checkin ở đây chưa
        return res.send("Đã checkin rồi!")
      }
      else {
        await qrcode.staffId.append(req.user.position);
        qrcode.numOfJoiningStaff++;
        await qrcode.save();
        return res.send("Done");
      }
    }
    else {
      let universities = await mongoose.model('university').find()
      return  res.render('adminpage/users/checkin', { universities: universities, data: req.params.id })
    }
  }
  catch (err) {
    next()
  }
})

//Tạo qrcode liên kết người dùng
router.post('/status', async (req, res, next) => {
  try {
    let insert = { ...req.body }
    insert.numOfJoiningStaff = 1;
    await insert.staffId.appen(req.user.position)
    await console.log(insert)
    let qrcode = await mongoose.model('qrcode').create(insert)
    return res.send("Done")
  }
  catch (err) {
    next()
  }
})



module.exports = router;