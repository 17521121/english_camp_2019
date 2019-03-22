var router = require("express").Router();

router.get('/logout', require('./logout'))

module.exports = router;