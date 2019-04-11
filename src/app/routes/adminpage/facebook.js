var router = require('express').Router();
var mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
    let facebooks = await mongoose.model('facebook').find();
    return res.render('adminpage/facebook', { facebooks })
})

module.exports = router;