import neko from 'mumaker';
const tiktok = async (req, res) => {
  try {
    let text = req.query.url
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
    if (!text.includes("tiktok.com")) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Tiktok URL!!"
    })
    let response = await neko.tiktok(text)
    if (response.like == "") return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Valid Tiktok URL!!"
    })
    return await res.status(200).send({
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

export default tiktok