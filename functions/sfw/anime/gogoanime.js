import axios from 'axios';
import { ANIME } from '@consumet/extensions';

let gogo = new ANIME.Gogoanime();
export async function animegogoName(req, res) {
  try {
    let anime = req.query.anime;
    let page = req.query.page || 1;
    if (!anime) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    const response = await gogo.search(anime, page);
    
    return res.status(200).send({
      stauts: 200,
      response: "successful!!",
      creator: global.creator,
      response: "successful!!",
      data: response
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
    let animeId = req.query.id
    if (!animeId) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide AnimeId...!!"
    })
    let response = await gogo.fetchAnimeInfo(animeId);
    
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
    let EpisodeId = req.query.id;
    let server = req.query.server || "gogocdn";
    if (!EpisodeId) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A EpisodeId...!!"
    })
    let response = await gogo.fetchEpisodeSources(EpisodeId,server);
    
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