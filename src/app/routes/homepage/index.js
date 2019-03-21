var router = require('express').Router();

router.get('/', async (req, res, next) => {
    return res.render('homepage/index', { user: req.user ? req.user : null })
})

module.exports = router;