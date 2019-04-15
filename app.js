var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require("config/index");
var session = require("express-session");
var passport = require("passport");


require("model/connect");
require("model/schema");

var app = express();
app.set("topSecretKey", config.serectKey);

// view engine setup
app.set("views", path.join(__dirname, "src", "app", "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(
  express.static(path.join(__dirname, "src", "app", "public"), {
    maxAge: "30 days"
  })
);
app.set("Cache-Control", "max-age=3000");


app.use(
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
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

app.use((req, res, next) => {
  res.locals.domain = config.domain
  next()
})
app.use('/setup', require('app/routes/setup'))
app.use('/admin', require('app/routes/adminpage'));
app.use("/", require("app/routes/homepage"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  res.render("error");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "dev" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
