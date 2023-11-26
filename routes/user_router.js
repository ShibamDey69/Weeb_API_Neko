import express from 'express';
import path from 'path';
import cors from 'cors';
import { register, login , verification } from "../functions/users/users.js"
import {validate,SignupSchema ,LoginSchema} from "./../MiddleWare/validate-zod.js"
const router = express.Router();
const __dirname = path.resolve();
let pathroute = path.join( __dirname, 'public');
router.use(express.json())
router.use(cors())
router.use(express.static(pathroute))
router.route("/").get((req,res) => {
res.sendFile(path.join(pathroute,'/index.html'))
})

router.route("/register").post(validate(SignupSchema),register);

router.route("/verify/:id/:token").get(verification);
router.route("/h").post((req,res) => {
  console.log(req.body)
  res.send(req.body)
})
router.route("/login").post(validate(LoginSchema),login);

export default router