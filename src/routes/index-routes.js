var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

/**
 * @swagger
 *  tags:
 *    name: Testing
 *    description: testing swagger
 */

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "you have reached GIPP" });
});

/* router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.signup
); */

//you sign up as a leader, but you can register a church!
router.post("/signup", (req, res, next) => {
  res.status(201).json({ msg: "sign up complete" });
});

router.post("/signin", () => {});

//provides email and password
//returns auth token
router.post("/signup", (req, res, next) => {
  res.status(200).json({ msg: "log in complete" });
});
module.exports = router;
