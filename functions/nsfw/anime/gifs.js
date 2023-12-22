import gifScrape from '../../../scrappers/gifs.js';

const gifs = async(req,res) => {
  try {
    let {gif} = req.params;
    if(!gif) return await res.status(400).send({
      status:400,
      response:"failed",
      reason:"Please Provide Gif Action!"
    })
    const resp = await gifScrape(gif,'nsfw/')
    const random = resp[Math.floor(Math.random() * resp.length)]
    let response = {
      gif:random
    }
    return await res.status(200).send({
      status:200,
      creador:global.creator,
      response:"successful",
      data:response
    })
  } catch (error) {
    await res.status(500).send({
      status:500,
      response:"failed",
      message:"An Internal Error Occured!!"
     })
  }
}

export default gifs