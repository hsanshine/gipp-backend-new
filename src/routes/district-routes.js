import express from "express";
import { check } from "express-validator";

const router = express.Router();

//you must be logged in and must provide the orgId and the userId..

/**
 * @swagger
 * tags:
 *  name: District
 *  description: API for the district entity in an organization
 */
/**
 * @swagger
 * /{orgId}/districts:
 *  post:
 *     summary: Creates a new district
 *     tags: [District]
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
 *         description: Successfully created new district
 *       500:
 *         description: There was a server error
 */
router.post("/:orgId/districts", () => {});
/**
 * @swagger
 * /{orgId}/districts/{districtId}:
 *   get:
 *     summary: Gets data about  a district
 *     tags: [District]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the district
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description:  Gets data about  a district
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/districts/:districtId", () => {});
/**
 * @swagger
 * /{orgId}/districts/{districtId}:
 *   delete:
 *     summary: Deletes a district
 *     tags: [District]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the district
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Deletes a district
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.delete("/:orgId/districts/:districtId", () => {});
/**
 * @swagger
 * /{orgId}/districts/{districtId}/leaders:
 *   get:
 *     summary: Gets leaders of a district
 *     tags: [District]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the district
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description:  Gets leaders of a district
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/districts/:districtId/leaders", () => {});

/**
 * @swagger
 * /{orgId}/districts/{districtId}/groups:
 *   get:
 *     summary: Gets data about groups in a district
 *     tags: [District]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the district
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data about groups in a district
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/districts/:districtId/groups", () => {});
/**
 * @swagger
 * /{orgId}/districts/{districtId}/reports:
 *   get:
 *     summary: Gets data about reports in a district
 *     tags: [District]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the district
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data about reports in a district
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/districts/:districtId/reports", () => {});
/**
 * @swagger
 * /{orgId}/districts/{districtId}/requests:
 *   get:
 *     summary: Gets data about requests in a district
 *     tags: [District]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the district
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data about requests in a district
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/districts/:districtId/requests", () => {});
/**
 * @swagger
 * /{orgId}/districts/{districtId}/rates:
 *   get:
 *     summary: Gets data about rates of a district
 *     tags: [District]
 *     parameters:
 *       - in : path
 *         name: orgId
 *         description: id of the organization
 *         schema:
 *           type: string
 *         required: true
 *       - in : path
 *         name: districtId
 *         description: Id of the district
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Gets data about rates in a district
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: No matching district found
 */
router.get("/:orgId/districts/:districtId/rates");

module.exports = router;
