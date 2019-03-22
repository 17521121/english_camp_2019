
var router = require("express").Router();
var passport = require("passport");
var images = require('images');
const fs = require('fs');
const axios = require('axios');
var mongoose = require('mongoose');
var config = require('config/index');
var path = require('path');
var a = require('../../../public/users')
/* ============================================================
  Function: Download Image
============================================================ */

const download_image = (url, image_path) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      responseType: "stream"
    }).then(response => {
      response.data.pipe(fs.createWriteStream(image_path).on('close', () => {
        resolve(true)
      }));
    }).catch(err => {
      reject(err);
    })
  })
}

router.get('/',
  passport.authenticate('facebook', { scope: ['email'] }));

router.get('/callback',
  passport.authenticate('facebook', { failureRedirect: '/users/login/facebook' }),
  async (req, res) => {
    try {
      console.log('aaa', req.user)
      let userAvatarLink = `https://graph.facebook.com/${req.user.data.facebookId}/picture?width=960&height=960&access_token=${req.user.data.accessToken}`
      let nameImage = `${new Date().getTime()}.png`;

      let title = path.join(__dirname, "../../../public/users", nameImage)
      // let title = `${__dirname} src/app/public/users/${nameImage}`
      console.log('title', title)
      await download_image(userAvatarLink, title);
      let coverLink = path.join(__dirname, "../../../public/covers", nameImage);
      console.log('coverLink', coverLink)
      // let coverLink = `src/app/public/covers/${nameImage}`
      await images(__dirname + "/cover.jpg").draw(images(title).resize(400), 10, 10).save(coverLink);
      console.log('merge image successfull')
      // console.log(newImages)
      await mongoose.model('facebook').findByIdAndUpdate(req.user.data._id, { cover: `${config.domain}/covers/${nameImage}`, userAvatar: `${config.domain}/users/${nameImage}`})

      // Successful authentication, redirect home.
      return res.redirect('/');
    } catch (err) {
      console.log(err)
    }
  });

module.exports = router;