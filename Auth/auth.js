import User from '../models/user-model.js';


export async function authenticateKey (req, res, next) {
  
  let API_KEY = req.query.api_key; 
  let account = await User.findOne({ apiKey: API_KEY });
  let MAX = (account.isPremium === true) ? 150 : 500;
  if (account) {
    let today = new Date().toISOString().split("T")[0];
    let usageCount = account.usage.findIndex((day) => day.date == today);
    if(account.isAdmin === false) {
      if(account.isBanned === true) return res.status(403).json({
    message: "You are banned from using this API."
  })
  
    if (usageCount >= 0) {
      //If API is already used today  
      if (account.usage[usageCount].count >= MAX) {
        //stop if the usage exceeds max API calls
       return res.status(429).send({          
            message: "Max API calls exceeded.",
        });
      }
      account.usage[usageCount].count++
    
        //have not hit todays max usage
        await User.updateOne(
          { _uid: account._uid },
          { $set: { 
            usage:account.usage,
                  }
          })
        next();
      
    } else {
      //Push todays's date and counting: 1 if there is a past date
      account.usage.push({ date: today, count: 1 });
      await User.updateOne(
          { _uid: account._uid },
          { $set: { 
            usage:account.usage
                  }
          })
      //ok to use again
      next();
    }
  } else {
      if (usageCount >= 0) {
        account.usage[usageCount].count++;
        await User.updateOne(
          { _uid: account._uid },
          { $set: { 
            usage:account.usage
                  }
          })
        next();
      
    } else {
      //Push todays's date and counting: 1 if there is a past date
      account.usage.push({ date: today, count: 1 });
      await User.updateOne(
          { _uid: account._uid },
          { $set: { 
            usage:account.usage
                  }
          })
      //ok to use again
      next();
    }
   } 
  } else {
    //Reject request if API key doesn't match
   return res.status(403).send({ message: "Please Provide The Correct api_key!!" });
  }
};