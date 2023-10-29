import axios from 'axios';

export async function animegogoName(req, res) {
  try {
    let anime = req.query.anime;
    let page = req.query.page || 1;
    if (!anime) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    const response = await axios.get(`https://api.consumet.org/anime/gogoanime/${anime}?page=${page}`);
    
    return res.status(200).send({
      stauts: 200,
      response: "successful!!",
      creator: global.creator,
      response: "successful!!",
      data: response.data
    })
  } catch (error) {
   console.log(error);
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
};


export async function gogoanimeInfo(req,res) {
  try {
    let anime = req.query.id
    if (!anime) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    let response = await axios.get(`https://api.consumet.org/anime/gogoanime/info/${anime}`)
    
    return res.status(200).send({
      status: 200,
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


export async function gogoanimeEpisode(req, res) {
  try {
    let anime = req.query.id;
    let server = req.query.server || "gogocdn";
    if (!anime) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    if (!anime) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Episode Number!!"
    })
    let response = await axios.get(`https://api.consumet.org/anime/gogoanime/watch/${anime}?server=${server}`);
    
    return res.status(200).send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data: response.data
    })
    
  } catch (error) {
console.log(error);
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}