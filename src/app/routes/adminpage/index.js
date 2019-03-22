var router = require('express').Router();
var { checkPermission } = require('services/checkPermission');
var { IS_ADMIN } = require('config/index');

router.use('/users/login', require('./users/login'));
router.use('/users/login/facebook', require('./users/loginFacebook'));

router.use(checkPermission(IS_ADMIN));

router.use('/users', require('./users'))

router.get('/', async (req, res, next) => {
    return res.render('adminpage/index')
})

module.exports = router;