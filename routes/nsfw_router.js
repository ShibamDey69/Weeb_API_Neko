import express from 'express';
import { xnxxSingle,xnxxMultiple } from '../functions/nsfw/porn/xnxx.js';
import { xvideosSingle,xvideosMultiple } from '../functions/nsfw/porn/xvideos.js';

const router = express.Router()

/** XNXX API Route */
router.route("porn/xnxx/multiple").get(xnxxMultiple)
router.route("porn/xnxx/single").get(xnxxSingle)

/** XVIDEOS API Route */
router.route("porn/xvideos/multiple").get(xvideosMultiple)
router.route("porn/xvideos/single").get(xvideosSingle)

export default router
