import express from 'express';
import { register, login } from "../functions/users/users.js"
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello...!");
});

router.route("/register").post(register);

router.route("/login").post(login);

export default router