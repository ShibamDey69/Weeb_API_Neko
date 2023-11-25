import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import User from '../../models/user-model.js';
import { sendEmail } from '../../utils/sendEmail.js';
const API = (len = 16) => {
  return [...Array(len)]
  .map((e) => ((Math.random() * 36) | 0).toString(36))
  .join('');
  }
let date = new Date().toISOString().split("T")[0];



const register = async(req, res) => {
  try {
    const { username, password, email ,phone } = req.query;
    
  if (!username || !password || !email || !phone) {
    return res.status(400).json({
      status:"failed!",
      message: "Missing Credentials...!",
    });
        }
    if(isNaN(phone)) return res.status(401).send({
      status:"failed!",
      message: "Invalid Credentials...!"
  })
  
  let id = uuidv4();
    
  const registerData = await User.findOne({ email });
  const phoneDb = await User.findOne({phone});
  const usernameDb = await User.findOne({username});
  
  let apiKey = API(16);
  if(registerData || phoneDb || usernameDb)
     return res.status(401).send({
    status:"failed!",
    message: "User already exists with this Credentials...!",
  })

    
    let hash_password = await bcrypt.hash(password,10);
     
  let user = await User.create({
                       _uid:id,
                       username,
               password:hash_password,
                       email,
              phone:Number(phone),
                       apiKey,
                       usage: [{
                         date,
                         count: 0,
                       }],
                       created: date,
          token: await crypto.randomBytes(32).toString("hex")
                     });
    
    let verifyLink = `${process.env.DOMAIN}/verify/${user._uid}/${user.token}`;
     
     await res.status(201).send({
      status:"successful!",
      message: "Successfully send a verification link to your email...!"
    });
    return await sendEmail(email,"Verification Mail",verifyLink)
  } catch (error) {
    return res.status(500).send({
      status:"failed!",
      message: "Something went wrong...!",
      error: error.message
    })
  }
};


    

const login = async(req, res) => {
  try {
  const { email, password } = req.query;
    
  if (!email || !password) {
    return res.status(400).json({
      status:"failed!",
      message: "Missing Credentials...!",
    });
  }
  const UserLogin = await User.findOne({ email });
  if (!UserLogin) {
    return res.status(404).json({
      status:"failed!",
      message: "Invalid Credentials...!",
    });
  }

  if (!bcrypt.compare(password,UserLogin.password)) {
    return res.status(401).json({
      status:"failed!",
      message: "InCorrect Credentials...!",
    });
  }

  if(UserLogin?.verified === false) {
    
      let verifyLink = `${process.env.DOMAIN}/verify/${UserLogin._uid}/${UserLogin.token}`;
      
     res.status(201).json({
      status:"successful!",
      message: "Your Account is not verified...!So we have sent another verification link to your email...!",
    });
  
    return await sendEmail(email,"Verification Mail",verifyLink)
    }

if (bcrypt.compare(password,UserLogin.password)) return res.status(200).json({
    status: "successful!",
    message: "User logged in successfully",
    api_key: UserLogin.apiKey,
  });
  } catch (error) {
    return res.status(500).send({
      status:"failed!",
      message: "Something went wrong...!",
      error: error.message
    })
  }
};

let verification = async (req, res) => {
	try {
		const user = await User.findOne({ _uid: req.params.id });
    
    if(!user) return res.status(404).send({
      status:"failed!",
      message: "Invalid Credentials...!"
    });
    if(user.verified === true) return res.status(401).send({
      status:"failed!",
      message: "User already verified...!"
    });
    if(user.verified === false) {
    if(user.token = req.params.token){
      await User.updateOne({ _uid: user._uid, verified: true }) 
    }
    
		return res.status(200).send({ 
      status:"successful!",
      message: "Email verified successfully...!" });
    }
	} catch (error) {
    console.log(error)
		res.status(500).send({ message: "Internal Server Error...!" });
  }
}

export { register,login ,verification }