import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import User from '../../models/user-model.js';
const API = (len = 16) => {
  return [...Array(len)]
  .map((e) => ((Math.random() * 36) | 0).toString(36))
  .join('');
  }



const register = async(req, res) => {
  try {
    const { username, password, email ,phone } = req.body;
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
  const emailDb = await User.findOne({ email });
  const phoneDb = await User.findOne({ phone });
  const usernameDb = await User.findOne({ username });
  let id = uuidv4();
  let apiKey = API(16);
  if(emailDb || phoneDb || usernameDb) return res.status(400).json({
    message: "User already exists with this Credentials...!",
  })
    let date = new Date().toISOString().split("T")[0];
    
    let hash_password = await bcrypt.hash(password,10);
    
   let UserCreated =  await User.create({
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
                     });
    
    return await res.status(201).send({
      status:"successful!",
      message: "User created successfully...!",
      api_key: UserCreated.apiKey,
      token: await UserCreated.generateAuthToken(),
    });
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
  const { email, password } = req.body;
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
    
  return res.status(200).json({
    status: "successful!",
    message: "User logged in successfully",
    api_key: UserLogin.apiKey,
    token:await UserLogin.generateAuthToken()
  });
  } catch (error) {
    return res.status(500).send({
      status:"failed!",
      message: "Something went wrong...!",
      error: error.message
    })
  }
};



export { register,login }