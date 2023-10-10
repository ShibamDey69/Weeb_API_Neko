import express from 'express';
import { xnxxSingle,xnxxMultiple } from '../functions/nsfw/porn/xnxx.js';
import { xvideosSingle,xvideosMultiple } from '../functions/nsfw/porn/xvideos.js';
import gifs from '../functions/nsfw/anime/gifs.js';
const router = express.Router()

/** XNXX API Route */
router.route("/porn/xnxx/multiple").get(xnxxMultiple)
router.route("/porn/xnxx/single").get(xnxxSingle)

/** XVIDEOS API Route */
router.route("/porn/xvideos/multiple").get(xvideosMultiple)
router.route("/porn/xvideos/single").get(xvideosSingle)

/** GIF API Route */
router.route("/anime/gifs/:gif").get(gifs)
export default router
