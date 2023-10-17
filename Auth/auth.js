import fs from 'node:fs';
let folder = "./storage"
let path = "./storage/user.json"

export function authenticateKey (req, res, next) {
  let MAX = 5000
  let users = JSON.parse(fs.readFileSync(path,'utf8'));
  
  let API_KEY = req.query.api_key; //Add API key to headers
  let account = users.find((user) => user.API_KEY == API_KEY);
  // find() returns an object or undefined
  if (account) {
    //If API key matches
    //check the number of times the API has been used in a particular day
    let today = new Date().toISOString().split("T")[0];
    let usageCount = account.usage.findIndex((day) => day.date == today);
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
        console.log(account.usage);
        next();
      }
    } else {
      //Push todays's date and counting: 1 if there is a past date
      account.usage.push({ date: today, count: 1 });
      //ok to use again
      next();
    }
  } else {
    //Reject request if API key doesn't match
    res.status(403).send({ error: { code: 403, msg: "You not allowed." } });
  }
};