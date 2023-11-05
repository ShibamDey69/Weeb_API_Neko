import characterAI from "../../../scrappers/characterai.js"

const characterAi = async (req, res) => {
  try {
    let { token,chatid,characterid,authorid,authorname } = req.query
   let chatId = chatid || "3f310f4a-6fdf-4897-a1f2-c9dd11e20f3d";
let characterId = characterid || "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw"
let authorId = authorid || 264164090
let authorName = authorname || "NekoSenpai69"
let Token = token || "3bc2c8fd41d327d2696b28b6c3b19adf2ff055bd"
characterAI.authenticate(Token);
characterAI.setup(characterId, chatId, authorId, authorName);
   if(!req.query.message) return await res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide Message To Respond!!"
   })
  let response = await characterAI.send(req.query.message);
  
    return await res.status(200).send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!! Error: "
    })
  }
}

export default characterAi