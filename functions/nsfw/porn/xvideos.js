import xv from 'xvideos-scraper';

const xvideosSingle = async (req, res) => {
  try {
    let text = req.query.q
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    let response = await xv.searchVideo({
      search: text,
      sort: "relevance",
      filterDuration: "3-10min"
    })

    let random = Math.floor(Math.random() * response.length)

    let response2 = await xv.getVideoData({
      proxy: true,
      videoUrl: response[random].video
    })
    return await res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response2
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!! Error: "
    })
  }
}



const xvideosMultiple = async (req, res) => {
  try {
    let text = req.query.q
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    let response = await xv.searchVideo({
      search: text,
      sort: "relevance",
      filterDuration: "3-10min"
    })
    let response3 = new Array(5);
    for (let i = 0; i < 5; i++) {
      let response2 = await xv.getVideoData({
        proxy: true,
        videoUrl: response[i].video
      })
      response3[i] = response2
    }

    return await res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response3
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!! Error: "
    })
  }
}

export { xvideosMultiple, xvideosSingle }