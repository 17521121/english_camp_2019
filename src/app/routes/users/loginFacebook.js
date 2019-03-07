var router = require("express").Router();
var passport = require("passport");

router.get('/',
  passport.authenticate('facebook', { scope: ['email'] }));

router.get('/callback',
  passport.authenticate('facebook', { failureRedirect: '/users/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    return res.redirect('/');
  });

module.exports = router;