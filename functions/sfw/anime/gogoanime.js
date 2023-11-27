import GogoAnime from '../../../scrappers/gogoanime.js'
const gogo = new GogoAnime()
export async function animegogoName(req, res) {
  try {
    let q = req.query.q;
    let page = req.query.page || 1;
    if (!q) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    const response = await gogo.search(q, page);
    
    return res.status(200).send({
      stauts: 200,
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
};


export async function gogoanimeInfo(req,res) {
  try {
    let animeId = req.params.id
    if (!animeId) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide AnimeId...!!"
    })
    let response = await gogo.info(animeId);
    
    return res.status(200).send({
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


export async function gogoanimeEpisode(req, res) {
  try {
    let EpisodeId = req.params.id;
    if (!EpisodeId) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A EpisodeId...!!"
    })
    let response = await gogo.episode(EpisodeId);
    
    return res.status(200).send({
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