import express from "express";

import { check } from "express-validator";
import res from "express/lib/response";
import router, { route } from "./index-routes";

const routers = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Organization:
 *       type: object
 *       required:
 *         - orgId
 *         - userId
 *         - leaderId
 *         - body
 *       properties:
 *         orgId:
 *           type: integer
 *           description: The Auto-generated id of an organization
 *         userId:
 *           type: integer
 *           description: id of logged in user
 *         leaderId:
 *           type: string
 *           description: id of leader to make changes about
 *       example:
 *         orgId: 1
 *         userId: 1
 *         leaderId: 1
 *
 */
/**
 * @swagger
 * tags:
 *  name: Organization
 *  description: API for the organization entity entity
 */
/**
 * @swagger
 * /org:
 *  post:
 *     summary: Creates a new organization.
 *     tags: [Organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orgName:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created organization
 *       500:
 *         description: There was a server error
 */
router.post("/org", (req, res, next) => {
  res.status(201).json({ msg: "you have registered a new organization" });
});
/**
 * @swagger
 * /org/{orgId}:
 *   get:
 *     summary: Gets data about the organization
 *     tags: [Organization]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data on the organization
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching organization found
 */
router.get("/org/:orgId", (req, res, next) => {
  res.status(200).json({ msg: "you get the org information" });
});

/**
 * @swagger
 * /org/{orgId}/approvals:
 *   get:
 *     summary: Returns all pending approvals
 *     tags: [Organization]
 *     responses:
 *       200:
 *         description: the list of all pending approvals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organization'
 */

router.get("/org/:orgId/approvals", (req, res, next) => {
  res.status(200).json({ msg: "you get the pending approvals" });
});

/**
 * @swagger
 * /org/{orgId}/approvals/history:
 *   get:
 *     summary: gets all previously done approvals and the person that did them
 *     tags: [Organization]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: all previously done approvals
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No previous approvals by organization
 */
router.get("/org/:orgId/approvals/history", (req, res, next) => {
  res
    .status(200)
    .json({ msg: "you get all previously done approvals and who did them" });
});
/**
 * @swagger
 * /org/{orgId}/approvals/{leaderId}:
 *  patch:
 *     summary: Used to approve a leader for the organization.
 *     tags: [Organization]
 *     parameters:
 *        -in : path
 *        name: leaderId
 *        schema:
 *           type: String
 *           required: true
 *           description: id of leader to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               leaderId:
 *                 type: string
 *               adminUserId:
 *                 type: string
 *               isApproved:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Successfully approved or not
 *       500:
 *         description: There was a server error
 */
router.patch("org/:orgId/approvals/:leaderId", (req, res, next) => {
  //the body has the leader you are approving and whether you said yes or no
  console.log(req.body);
  res.status(200).json({
    msg: "you will have to say whether you approve the subject or not",
  });
});

router.patch("/org/:orgId/leaders/:leaderId", (req, res, next) => {
  res.status(204).json({ msg: "the leader has successfully been updated" });
});
/**
 * @swagger
 *  /org/{orgId}/leaders/{leaderId}:
 *    delete:
 *      summary: Deletes an exiting leader
 *      tags: [Organization]
 *      parameters:
 *        - in: path
 *          name: leaderId
 *          description: Delete a leader from the organization
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The leader was deleted
 *        404:
 *          description: The leader was not found
 *
 */
router.delete("/org/:orgId/leaders/:leaderId", (req, res, next) => {
  res.status(202).json({ msg: "the leader has been deleted" });
});
/**
 * @swagger
 * /org/{orgId}/reports:
 *   get:
 *     summary: Returns all organization reports
 *     tags: [Organization]
 *     parameters:
 *        - in: query
 *          name: status
 *          schema:
 *            type: string
 *            enum: [new]
 *          description: Choose to get just the new unreviewed reports
 *     responses:
 *       200:
 *         description: Lists all organization reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organization'
 *       404:
 *          description: Matching organization not found
 */
router.get("/org/:orgId/reports", () => {}); //maybe should have option to ask for group/district reports

/**
 * @swagger
 * /org/{orgId}/requests:
 *   get:
 *     summary: Returns all organization requests
 *     tags: [Organization]
 *     parameters:
 *        - in: query
 *          name: status
 *          schema:
 *            type: string
 *            enum: [new]
 *          description: Choose to get just the new unreviewed requests
 *     responses:
 *       200:
 *         description: Lists all organization requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organization'
 *       404:
 *          description: Matching organization not found
 */
router.get("/org/:orgId/requests", () => {});

/**
 * @swagger
 * /org/{orgId}/districts:
 *   get:
 *     summary: Returns all organization districts
 *     tags: [Organization]
 *     responses:
 *       200:
 *         description: Lists all organization requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organization'
 *       404:
 *          description: Matching organization not found
 */
router.get("/org/:orgId/districts", () => {});

router.get;
module.exports = router;
