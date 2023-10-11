import ytdl from '../../../scrappers/ytdl.js';

const ytVideo = async (req,res) => {
  try {
     let text = req.query.url
     let quality = req.query.quality || "360p"
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
 
    if (!text.includes("https://youtu")) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A YouTube URL!!"
    })
   let response = await ytdl(text,"mp4",quality)
    let statusCode = response.data.statusCode
    
    if (statusCode == 500) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Valid YouTube URL!!"
    })
    return await res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response.data
    })
  } catch (error) {
    return await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}


const ytAudio = async (req,res) => {
  try {
    let text = req.query.url
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
 
    if (!text.includes("https://youtu")) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A YouTube URL!!"
    })
    let response = await ytdl(text,"mp3")
    let statusCode = response.url
    
    if (statusCode.includes(undefined)) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Valid YouTube URL!!"
    })
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