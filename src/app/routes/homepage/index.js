var router = require('express').Router();
var mongoose = require('mongoose');
var _ = require('lodash');

router.get('/', async (req, res, next) => {
    try {
        if (!_.isEmpty(req.query)) {
            let user = await mongoose.model('facebook').findById(_.get(req.query.id));
            if (_.isEmpty(user)) {
                throw Error("Not users")
            }
            return res.render('homepage/index', { user: user })
        } else {
            return res.render('homepage/index', { user: req.user ? req.user : null })
        }

    } catch (err) {
        return res.render('homepage/index', { user: req.user ? req.user : null })
    }
})

module.exports = router;