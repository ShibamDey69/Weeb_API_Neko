import express from 'express';
import { xnxxSingle,xnxxMultiple } from '../functions/nsfw/porn/xnxx.js';
import { xvideosSingle,xvideosMultiple } from '../functions/nsfw/porn/xvideos.js';

const router = express.Router()

/** XNXX API Route */
router.route("/xnxx/multiple").get(xnxxMultiple)
router.route("/xnxx/single").get(xnxxSingle)

/** XVIDEOS API Route */
router.route("/xvideos/multiple").get(xvideosMultiple)
router.route("/xvideos/single").get(xvideosSingle)

export default router
