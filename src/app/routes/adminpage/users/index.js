var router = require("express").Router();
var mongoose = require('mongoose')
router.get('/logout', require('./logout'))

router.get('/status', async (req, res, next) => {
  try {
    if(req.query.fullname) {
      let user = await mongoose.model('qrcode').findOne({fullname: req.query.fullname, MSSV: req.query.MSSV, university: req.query.university})
      if(!user) {
        let insert= {...req.query}
        insert.isValid = true
        insert.numOfJoiningStaff = 1
        user = await mongoose.model('qrcode').create();
      }
      user.numOfJoiningStaff = 1;
      await user.save();
    }
    return res.render('adminpage/users/status')
  }
  catch(err) {
    next();
  }
})



module.exports = router;