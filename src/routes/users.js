var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "This is a users resource on GIPP" });
});

module.exports = router;
