var router = require("express").Router();
var passport = require("passport");
var session = require("express-session");
var bcrypt = require('bcryptjs');
var { success } = require('services/returnToUser');
var { checkPermission } = require('services/checkPermission');
var mongoose = require('mongoose');

router.use(
  session({
    name: "english_camp",
    proxy: true,
    resave: true,
    secret: "english_camp.secrect", // session secret
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false /*Use 'true' without setting up HTTPS will result in redirect errors*/
    }
  })
);

require("config/passport")(passport);

//PassportJS middleware
router.use(passport.initialize());
router.use(passport.session()); //persistent login sessions


router.use('/users/login/facebook', require('./users/loginFacebook'));

router.use('/users/login', require('./users/login'))
router.get('/setup', (req, res, next) => {
  let insert = {
    username: "ducnm98",
    password: "123",
    roles: ["*"],
    fullname: "Nguyễn Minh Đức"
  }
  const saltRounds = 10;
      bcrypt.hash(insert.password, saltRounds, async (err, hash) => {
        insert.password = hash;
        let usersInfo = await mongoose.model('users').create(insert)
        console.log(usersInfo)
      });
  return success(res, "Done");
})

// router.use(checkPermission(["*"]));

router.use('/users', require('./users'));

router.get('/', function(req, res, next) {
  console.log('user connected', req.user)
  res.render('index', { title: 'Express', user: req.user ? req.user : null });
});


module.exports = router;
