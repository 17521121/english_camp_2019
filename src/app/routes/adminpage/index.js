var router = require('express').Router();

router.get('/', async (req, res, next) => {
    return res.render('adminpage/index')
})


module.exports = router;