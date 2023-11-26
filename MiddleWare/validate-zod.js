import { z } from "zod";



const SignupSchema = z.object({
  
  username: z
    .string({ message: "UserName is Required...!" })
    .trim()
    .min(5,{message:"UserName must be atleast of 5 characters...!"})
    .max(255,{message:"UserName can't be more than  255 characters...!"}),
  
  email: z
    .string({message: "Email is Required...!"})
    .trim()
    .email({message:"Email is Invalid...!"})
    .min(5,{message:"Email must be atleast of 5 characters...!"})
    .max(255,{message:"Email can't be more than 255 characters...!"}),
  
  password: z
    .string({message: "Password is Required...!"})
    .trim()
    .min(5,{message:"Password must be atleast of 5 characters...!"})
    .max(1024,{message:"Password can't be more than 1024 characters...!"}),
  
  phone: z
  .string({message: "Number is Required...!"})
  .trim()
  .min(10,{message:"Number must be atleast of 10 characters...!"})
  .max(20,{message:"Number can't be more than  20 characters...!"})
  
});

const LoginSchema = z.object({
    email: z
      .string({message: "Email is Required...!"})
      .trim()
      .email({message:"Email is Invalid...!"})
      .min(5,{message:"Email must be atleast of 5 characters...!"})
      .max(255,{message:"Email can't be more than 255 characters...!"}),
    password: z
      .string({ message: "Password is Required...!" })
      .trim()
      .min(5,{message:"Password must be atleast of 5 characters...!"})
      .max(1024,{message:"Password can't be more than 1024 characters...!"})

});

const validate = (schema) => async(req, res, next) => {
  try {
    const { error } = schema.safeParse(req.body);
    if (error) {
      return res.status(400).json({
        status: "failed!",
        message: JSON.parse(error.message),
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      status: "failed!",
      message: "Something went wrong...!",
      error: error.message,
    });
  }
}

export { validate,SignupSchema ,LoginSchema};