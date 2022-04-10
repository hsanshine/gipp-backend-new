var express = require("express");
var router = express.Router();

/**
 * @swagger
 *  tags:
 *    name: Testing
 *    description: testing swagger
 */

/**
 * @swagger
 * /:
 *  get:
 *    summary: I am using this to test my api.
 *    tags: [Testing]
 *    responses:
 *      200:
 *          description: 'the test is a succcess'
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 */
router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "you have reached GIPP" });
});

module.exports = router;
