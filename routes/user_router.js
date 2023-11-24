import express from 'express';
import { validate,SignupSchema,LoginSchema } from '../MiddleWare/validate-zop.js';
import { register, login } from "../functions/users/users.js"
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello...!");
});

router.route("/register").post(validate(SignupSchema) ,register);

router.route("/login").post(validate(LoginSchema)
,login);

export default router