import express from "express";
import { check } from "express-validator";

const router = express.Router();

//you must be logged in and must provide the orgId and the userId..

/**
 * @swagger
 * tags:
 *  name: Leader
 *  description: API for the leader entity in an organization
 */

/**
 * @swagger
 * /{orgId}/leaders/{leaderId}:
 *  delete:
 *     summary: Deletes a leaders
 *     tags: [Leader]
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
 *         description: successfully deleted a leader
 *       500:
 *         description: There was a server error
 */
router.delete("/:orgId/leaders/:leaderId", () => {});
/**
 * @swagger
 * /{orgId}/leaders/{leaderId}:
 *  patch:
 *     summary: Edits a leaders
 *     tags: [Leader]
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
 *         description: Edits a leaders
 *       500:
 *         description: There was a server error
 */
router.patch("/:orgId/leaders/:leaderId", () => {});
/**
 * @swagger
 * /{orgId}/leaders/{leaderId}:
 *  get:
 *     summary: Gets data on a leader
 *     tags: [Leader]
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
 *         description: Gets data on a leader
 *       500:
 *         description: There was a server error
 */
router.get("/:orgId/leaders/:leaderId", () => {});

module.exports = router;
