import pheaven from 'p-heaven'


const xnxxMultiple = async (req, res) => {
  try {
    let text = req.query.q
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    let response = await pheaven.searchdl(text)
    return await res.status(200).send({
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


const xnxxSingle = async (req, res) => {
  try {
    let text = req.query.q
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    let response = await pheaven.searchdlsingle(text)
    return await res.status(200).send({
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

export { xnxxSingle, xnxxMultiple }