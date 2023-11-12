import express from 'express';
const router = express.Router()
import fs from 'node:fs';
let folder = "./storage"
let path = "./storage/user.json"
import {authenticateKey} from "./../Auth/auth.js"
let arr = [];
function API(len = 16) {
  return [...Array(len)]
  .map((e) => ((Math.random() * 36) | 0).toString(36))
  .join('');
  }
  
  let id = Date.now();

router.route("/register").post((req,res) => {
  try{
  let users = JSON.parse(fs.readFileSync(path,'utf8'));
  if(!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
  }
  arr.push(...users)
  let API_KEY = API(25)
  let admin = false
  let today = new Date().toISOString().split('T')[0];
  let { name, email, password } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Please fill all the fields!!"
    })
  }
  function User(ids,admins,names,emails,passwords,API_KEYS,Today) {
     this.id = ids;
     this.admin = admins
     this.name = names;
     this.email = emails;
     this.password = passwords;
     this.API_KEY = API_KEYS;
     this.usage = [{ date: Today, count: 0 }];
  }
  const user = new User(id,admin,name,email,password,API_KEY,today,)
  const result = arr.find(({ email }) => email === user.email);
  if(result?.email === user.email) return res.status(400).json({
    msg: "Email already exists!!"
  })
  arr.push(user)
    
    const unique = arr.filter((obj, index) => {
          return index === arr.findIndex(o => obj.email === o.email);
      });
fs.writeFileSync(path,JSON.stringify(unique,null,2))
  res.send({
    msg:"Successfully Registered!!",
    user:{
    "_id":id,
    "admin":admin,
    "name":name,
    "email":email,
    "API_KEY":API_KEY
    }
  })
  } catch (error) {
    console.log(error)
  }
})

router.route("/login").post((req,res) => {
  try {
  let users = JSON.parse(fs.readFileSync(path,'utf8'));
  let { password } = req.body
  let emails = req.body.email
  if (!emails || !password) {
    return res.status(400).json({
      error: "Please fill all the fields!!"
    })
    
  }
  const result = users.find(({ email }) => email === emails);
  if(!result) return res.status(400).json({
    msg: "Email does not exist!!"
  })
  if(result.password !== password) return res.status(400).json({
    msg: "Password is incorrect!!"
  })
  res.send({
    msg:"Successfully Logged In!!",
    user:{
      "_id":result.id,
      "admin":result.admin,
      "name":result.name,
      "email":result.email,
      "API_KEY":result.API_KEY
    }
  })
  } catch(error) {
    console.log(error); 
  }
})


router.route("/users").get(authenticateKey,async(req,res) => {
  try {
    let apikey = req.query.api_key
    if(!apikey) return res.status(400).json({
      msg:"Please provide an api key!!"
    })
    let users = JSON.parse(fs.readFileSync(path,'utf8'));
    const result = users.find(({ API_KEY }) => API_KEY === apikey);
    if(result.admin !== true) return res.status(400).json({
      msg: "You are not authorized to view this page!!"
    })
   return await res.send({
      msg:"Successfully Logged In!!",
      users:users
    })
    
  } catch(error) {
    console.log(error);
  }
})
export default router
