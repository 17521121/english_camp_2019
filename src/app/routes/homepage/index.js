var router = require('express').Router();
var mongoose = require('mongoose');
var _ = require('lodash');
var { success, errorWithMess, empty } = require('services/returnToUser');

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

router.get('/university', async (req, res, next) => {
    try {
        console.log(req.user)
        let university = await mongoose.model('university').find().select(["_id", "name"])
        return success(res, "Done", { university })
    } catch (err) {
        return errorWithMess(res, err)
    }
})

router.post('/set-university', async (req, res, next) => {
    if (req.isAuthenticated()) {
        await mongoose.model('university').findOneAndUpdate({ name: req.body.university }, {
            $push: {
                facebookId: req.user._id
            }
        })
        await mongoose.model('facebook').findByIdAndUpdate(req.user._id, { isVerify: true })
    } else {
        return empty(res, "Done")
    }
})

module.exports = router;