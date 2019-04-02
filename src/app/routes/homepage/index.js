var router = require("express").Router();
var mongoose = require("mongoose");
var _ = require("lodash");
var { success, errorWithMess, empty } = require("services/returnToUser");

router.get("/", async (req, res, next) => {
  try {
    let university = await mongoose.model("university").aggregate([
      {
        $project: {
          name: 1,
          image: 1,
          facebookId_count: { $size: { $ifNull: ["$facebookId", []] } }
        }
      },
      {
        $sort: { facebookId_count: -1 }
      },
      { $limit: 6 }
    ]);
    let facebookCount = await mongoose.model('facebook').count();
    console.log(university, facebookCount);
    return res.render("homepage/index", {
      user: req.user ? req.user : null,
      university,
      facebookCount
    });
  } catch (err) {
    return res.render("homepage/index", {
      user: req.user ? req.user : null,
      university,
      facebookCount
    });
  }
});

router.get("/university", async (req, res, next) => {
  try {
    console.log(req.user);
    let university = await mongoose
      .model("university")
      .find()
      .select(["_id", "name"]);
    return success(res, "Done", { university });
  } catch (err) {
    return errorWithMess(res, err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let university = await mongoose.model("university").aggregate([
      {
        $project: {
          name: 1,
          image: 1,
          facebookId_count: { $size: { $ifNull: ["$facebookId", []] } }
        }
      },
      {
        $sort: { facebookId_count: 1 }
      },
      { $limit: 6 }
    ]);
    let user = await mongoose.model("facebook").findById(req.params.id);
    let facebookCount = await mongoose.model('facebook').count();
    if (_.isEmpty(user)) {
      throw Error("Not users");
    }
    console.log(user);
    return res.render("homepage/index", { user: user, university, facebookCount });
  } catch (err) {
    return res.render("homepage/index", {
      user: req.user ? req.user : null,
      university,
      facebookCount
    });
  }
});

router.post("/set-university", async (req, res, next) => {
  if (req.isAuthenticated()) {
    await mongoose.model("university").findOneAndUpdate(
      { name: req.body.university },
      {
        $push: {
          facebookId: req.user._id
        }
      }
    );
    await mongoose
      .model("facebook")
      .findByIdAndUpdate(req.user._id, { isVerify: true });
    return res.redirect(`/${req.user._id}`)
  } else {
    return res.redirect(`/${req.user._id}`)
  }
});

module.exports = router;
