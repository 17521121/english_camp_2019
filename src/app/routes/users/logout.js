var router = require("express").Router();

router.post("/logout", async (req, res, next) => {
  if (req.isAuthenticated()) {
    req.logout();
  }
  return res.redirect("/users/login");
});

module.exports = router;
