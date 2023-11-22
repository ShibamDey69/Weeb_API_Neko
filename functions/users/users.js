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
      message: "Missing username, password, email or phone number...!",
    });
        }
    if(isNaN(phone)) return res.status(401).send({
    message: "Please Provide Valid Phone Number!!"
  })
  const emailDb = await User.findOne({ email });
  const phoneDb = await User.findOne({ phone });
  const usernameDb = await User.findOne({ username });
  let id = uuidv4();
  let apiKey = API(16);
  if(emailDb || phoneDb || usernameDb) return res.status(400).json({
    message: "User already exists with this email, number or username...!",
  })
    let date = new Date().toISOString().split("T")[0];
    
    let hash_password = await bcrypt.hash(password,10);
    const userData = {
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
    };
    await User.create(userData);
    const UserData = {
      _uid:id,
      username,
      email,
      phone:Number(phone),
      apiKey,
      usage: [{
          date,
          count: 0,
        }],
      created: date,
    };
    return await res.status(201).send({
      status:"successful!",
      userData:UserData,
      message: "User created successfully...!",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something went wrong...!",
    })
   }
  };

const login = async(req, res) => {
  try {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Missing username or password",
    });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (!bcrypt.compare(password,user.password)) {
    return res.status(401).json({
      message: "Incorrect password",
    });
  }
    const UserData = {
      _uid:user._uid,
      username:user.username,
      email:user.email,
      phone:user.phone,
      apiKey:user.apiKey,
      usage:user.usage,
      created:user.created,
    };
  return res.status(200).json({
    status: "successful!",
    userData:UserData,
    message: "User logged in successfully",
  });
  } catch (error) {
    throw new Error(error);
  }
  };

export { register,login }