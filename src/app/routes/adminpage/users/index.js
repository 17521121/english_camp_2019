var router = require("express").Router();

router.get('/logout', require('./logout'))

router.get('/status', async (req, res, next) => {
  try {
    return res.render('adminpage/users/status')
  }
  catch(err) {
    next();
  }
})



module.exports = router;