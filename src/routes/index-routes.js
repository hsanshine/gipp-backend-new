var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

import leaderController from "../controllers/leader-ctrl";

/**
 * @swagger
 *  tags:
 *    name: Testing
 *    description: testing swagger
 */

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "you have reached GIPP" });
});

// router.get("/:orgName", (req, res, next) => {
//   //grab the org  name and then set the org-id on the header...
//   res.status(200).json({
//     msg: `you have sent a link with an org name...${req.params.orgName}`,
//   });
// });
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

router.post("/signin", leaderController.signin);

router.post("/signup", leaderController.signup);
module.exports = router;
