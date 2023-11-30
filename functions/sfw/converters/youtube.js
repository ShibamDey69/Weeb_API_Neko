import NekoYtdl from '../../../scrappers/ytdl.js';
let ytdl = new NekoYtdl()
const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
                  

const ytVideo = async (req,res) => {
  try {
     let text = req.query.q
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
 
    if (ytRegex.test(text)) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A YouTube URL!!"
    });
    
    let response = await ytdl.mp4(text)
    
    return await res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    console.log(error)
    return await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}


const ytAudio = async (req,res) => {
  try {
    let text = req.query.q
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
 
    if (ytRegex.test(new URL(text))) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Valid YouTube URL!!"
    })
    
    let response = await ytdl(text);
    
    return await res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    return await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
        }

export { ytVideo, ytAudio }