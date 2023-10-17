import fs from 'node:fs';
let path = "./storage/user.json"
let arr = []
export function authenticateKey (req, res, next) {
  let MAX = 50
  let users = JSON.parse(fs.readFileSync(path,'utf8'));
  arr.push(...users)
  let API_KEY = req.query.api_key; //Add API key to headers
  let account = users.find((user) => user.API_KEY == API_KEY);
  // find() returns an object or undefined
  if (account) {
    //If API key matches
    //check the number of times the API has been used in a particular day
    let today = new Date().toISOString().split("T")[0];
    let usageCount = account.usage.findIndex((day) => day.date == today);
    if(account.admin === false) {
    if (usageCount >= 0) {
      //If API is already used today
      
      if (account.usage[usageCount].count >= MAX) {
        //stop if the usage exceeds max API calls
        res.status(429).send({
          error: {
            code: 429,
            msg: "Max API calls exceeded.",
          },
        });
      } else {
        //have not hit todays max usage
        account.usage[usageCount].count++;
        arr.push(account);
        const ids = arr.map(({ API_KEY }) => API_KEY);
const filtered = arr.filter(({ API_KEY }, index) => !ids.includes(API_KEY, index + 1));
        fs.writeFileSync(path, JSON.stringify(filtered, null, 2));
        next();
      }
    } else {
      //Push todays's date and counting: 1 if there is a past date
      account.usage.push({ date: today, count: 1 });
      arr.push(account);
        const ids = arr.map(({ API_KEY }) => API_KEY);
const filtered = arr.filter(({ API_KEY }, index) => !ids.includes(API_KEY, index + 1));
        fs.writeFileSync(path, JSON.stringify(filtered, null, 2));
      //ok to use again
      next();
    }
    } else {
      if (usageCount >= 0) {
        account.usage[usageCount].count++;
        arr.push(account);
        const ids = arr.map(({ API_KEY }) => API_KEY);
const filtered = arr.filter(({ API_KEY }, index) => !ids.includes(API_KEY, index + 1));
        fs.writeFileSync(path, JSON.stringify(filtered, null, 2));
        next();
      
    } else {
      //Push todays's date and counting: 1 if there is a past date
      account.usage.push({ date: today, count: 1 });
      arr.push(account);
        const ids = arr.map(({ API_KEY }) => API_KEY);
const filtered = arr.filter(({ API_KEY }, index) => !ids.includes(API_KEY, index + 1));
        fs.writeFileSync(path, JSON.stringify(filtered, null, 2));
      //ok to use again
      next();
    }
   } 
  } else {
    //Reject request if API key doesn't match
    res.status(403).send({ error: { code: 403, msg: "You not allowed." } });
  }
};