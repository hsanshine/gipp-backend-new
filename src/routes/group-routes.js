import express from "express";
import { check } from "express-validator";

const router = express.Router();

//you must be logged in and must provide the orgId and the userId..

/**
 * @swagger
 * tags:
 *  name: Group
 *  description: API for the group entity in an organization
 */
/**
 * @swagger
 * /{orgId}/groups:
 *  post:
 *     summary: Creates a new group
 *     tags: [Group]
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
 *         description: Successfully created new group
 *       500:
 *         description: There was a server error
 */
router.post("/:orgId/groups", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}:
 *   get:
 *     summary: Gets data about  a group
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data about  a group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/groups/:groupId", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/leaders:
 *   get:
 *     summary: Gets the current leaders of a particular group
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description:  Gets the current leaders of a particular group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/groups/:groupId/leaders", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/members:
 *   get:
 *     summary: Gets all members of group
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets all members of group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/groups/:groupId/members", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/members:
 *  post:
 *     summary: Creates a new member of a group
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Creates a new member of a group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.post("/:orgId/groups/:groupId/members", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/members/{memberId}:
 *  get:
 *     summary: Gets data on a member
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: memberId
 *         description: Id of a member
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data on a member
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/groups/:groupId/members/:memberId", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/members/{memberId}:
 *  patch:
 *     summary: Edits a group member
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: memberId
 *         description: Id of member
 *         schema:
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description:  Edits a group member
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.patch("/:orgId/groups/:groupId/members/:memberId", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/members/{memberId}:
 *  delete:
 *     summary: Deletes a group member
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: memberId
 *         description: Id of member
 *         schema:
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description:  Deletes a group member
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.delete("/:orgId/groups/:groupId/members/:memberId", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/reports:
 *   get:
 *     summary: Gets reports for a particular group
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description:  Gets reports for a particular group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/groups/:groupId/reports", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/reports:
 *   post:
 *     summary: Creates a new group report
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description:  Creates a new group report
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.post("/:orgId/groups/:groupId/reports", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/requests:
 *   get:
 *     summary: Gets requests for a particular group
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: groupId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description:  Gets requests for a particular group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/groups/:groupId/requests", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}/rates:
 *   get:
 *     summary: Gets data about rates for a group
 *     tags: [Group]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the group
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data about rates of a group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/groups/:groupId/rates");
/**
 * @swagger
 * /{orgId}/groups/{groupId}:
 *  delete:
 *     summary: Deletes a group
 *     tags: [Group]
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
 *         description: Successfully deleted group
 *       500:
 *         description: There was a server error
 */
router.delete("/:orgId/groups:groupId", () => {});
/**
 * @swagger
 * /{orgId}/groups/{groupId}:
 *  patch:
 *     summary: Edits a group, for example makes it inactive
 *     tags: [Group]
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
 *         description: Successfully edited group
 *       500:
 *         description: There was a server error
 */
router.patch("/:orgId/groups:groupId", () => {});

module.exports = router;
