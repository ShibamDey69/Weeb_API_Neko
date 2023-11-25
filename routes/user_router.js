import express from 'express';
import path from 'path';
import cors from 'cors';
import { register, login , verification } from "../functions/users/users.js"
const router = express.Router();
const __dirname = path.resolve();
let pathroute = path.join( __dirname, 'public');
router.use(express.json())
router.use(cors())
router.use(express.static(pathroute))
router.route("/").get((req,res) => {
res.sendFile(path.join(pathroute,'/index.html'))
})

router.route("/register").get(register);

router.route("/verify/:id/:token").get(verification);

router.route("/login").get(login);

export default router