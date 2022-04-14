var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

import leaderController from "../controllers/leaders-ctrl";

/**
 * @swagger
 *  tags:
 *    name: Testing
 *    description: testing swagger
 */

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "you have reached GIPP" });
});

router.get("/:orgName", (req, res, next) => {
  //grab the org  name and then set the org-id on the header...
  res.status(200).json({
    msg: `you have sent a link with an org name...${req.params.orgName}`,
  });
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

//you would have registerd an organization already, then you will provide its handle to sign up to it...
//to register an org, you register it... , the you provide your data so that you are set as the admin for it....
// in this case when registering an org.. you must provide an email for its administrator....
router.post("/signup", (req, res, next) => {
  //you can be a group leader, or a district leader or an admin...
  res.status(201).json({ msg: "sign up complete" });
});

// register an org => provide org leader details... (this is how the leader of an org signs  up)
//everything leaves under an org...
//signup as leader => chooose org to be added to -> or you go to the organization page and signup
// for example... you sign up as a leader at gipp/  /signup
// for now we only have one org that will show up in the form...

router.post("/signin", () => {});

//provides email and password
//returns auth token
// sign up as leader .. this is its own process....
// then after that you are done.... you have the option to join a new org or start a new one...
//for starters... yem will be already created so you will just join it automatically after being approvaed..
//your provide a handle to the org you are joining
//
router.post("/signup", leaderController.signup);
module.exports = router;
