var bcrypt = require("bcryptjs");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
var mongoose = require("mongoose");
var { domain, appId, appSerect } = require("./index");

module.exports = passport => {
  // passport config

  // Serialize user for session
  // When user login to system at the first time, passport will store their sessions via _id.
  passport.serializeUser((object, done) => {
    done(null, {
      id: object.data._id,
      isFacebook: object.isFacebook
    });
  });

  // Deserialize user from session
  // When user login to system at the second time, passport will find id in session and return their user info.
  passport.deserializeUser((object, done) => {
    if (object.isFacebook) {
      mongoose.model('facebook').findById(object.id, (err, user) => {
        if (err) done(err);
        console.log(user)
        if (user) {
          done(err, user);
        }
      })
    } else {
      mongoose.model("users").findById(object.id, (err, user) => {
        if (err) done(err);
  
        if (user) {
          user.password = null;
          done(err, user);
        }
      });
    }
  });

  passport.use(
    new FacebookStrategy(
      {
        clientID: appId,
        clientSecret: appSerect,
        callbackURL: '/users/login/facebook/callback',
        profileFields: ['id', 'displayName', 'picture', 'email', 'gender']
      },
      async function(accessToken, refreshToken, profile, cb) {
        try {
          console.log("accessToken", accessToken);
          console.log("refreshToken", refreshToken);
          console.log("profile", profile);
          let facebookInfo = await mongoose.model('facebook').findOne({ facebookId: profile.id })
          if (facebookInfo) {
            return cb(null, {
              data: facebookInfo,
              isFacebook: true
            })
          } else {
            let newFacebookInfo = await mongoose.model('facebook').create({
              facebookId: profile.id,
              accessToken,
              refreshToken,
              name: profile.displayName,
              email: profile.emails ? profile.emails[0].value : null,
              avatar: profile.photos ? profile.photos[0].value : null
            })
            return cb(null, {
              data: newFacebookInfo,
              isFacebook: true
            })
          }
        } catch (err) {
          return cb(err);
        }
        
      }
    )
  );

  passport.use(
    "local",
    new LocalStrategy((username, password, done) => {
      mongoose
        .model("users")
        .findOne({ username: username }, (err, userDoc) => {
          if (err) done(err);
          if (userDoc) {
            bcrypt.compare(password, userDoc.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                userDoc.password = null;
                return done(null, {
                  data: userDoc,
                  isFacebook: false
                });
              }
              // If password is wrong
              return done(null, false);
            });
          }
          // If cannot find user
          else return done(null, false);
        });
    })
  );
};
