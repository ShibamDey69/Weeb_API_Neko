import neko from 'i-downloader';

const instagram = async (req, res) => {
  try {
    let text = req.query.q
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
    if (!text.includes("instagram.com/")) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Instagram URL!!"
    })
    let response = await neko.idl(text)
    if (response.data == ``) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Valid Instagram URL!!"
    })
    return await res.status(200).send({
      status:200,
      creator: global.creator,
      response: "successful!!",
      data: response.data
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export default instagram