import neko from 'mumaker';
const facebook = async (req, res) => {
  try {
    let text = req.query.q;
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
    if (!text.includes("facebook.com")) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Facebook URL!!"
    })
    let response2 = await neko.facebook(text)
    console.log(response2)
    let urls;
    let description = response2.description
    if(response2.urls[0].quality.includes("720p")) {
     urls = [
      {
        quality: "720p (HD)",
        url: response2?.urls[0]?.url
      },
      {
        quality: "360p (SD)",
        url: response2?.urls[1]?.url
      }
    ]
  } else {
      urls = [
      {
        quality: "360p (SD)",
        url: response2?.urls[0]?.url
      }
    ]
  }
    let response = {
      description: description,
      urls: urls
    }
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
      reason: "An Internal Error Occured!!"
    })
  }
}

export default facebook