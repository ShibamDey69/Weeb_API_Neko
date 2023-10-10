import zAnime from 'z-anime';
import axios from 'axios';
const BASE_URL = 'https://aniwatch.to/';


const animeSearch = async (req, res) => {
  try {
    let anime = req.query.anime;
    if (!anime) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    const response = await zAnime.search(anime);
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
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
};



const animeTrending = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.trending(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
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


const animeAiring = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.airing(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
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

const animeUpcoming = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.upcoming(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
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

const animePopular = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.popular(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
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

const animeMovie = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.movie(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
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

const animeUpdated = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.updated(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeSpotlight = async (req, res) => {
  try {
    let page = req.query.page || 1;
    let response = await zAnime.spotlight(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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



const animeGenre = async (req, res) => {
  try {
    let page = req.query.page || 1
    let genre = req.params.genre
    if (!genre) {
      return res.status(404).send({
        status: 404,
        response: "failed!!",
        reason: "No Genre Provided!!"
      })
    }
    let response = await zAnime.genere(genre, page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!! Error: "+error
    })
  }
}

const animeLatest = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.latest(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeOna = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.ona(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeOva = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.ova(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeTv = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.tv(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeSpecial = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.specials(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeComplete = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.completed(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeDub = async (req, res) => {
  try {
    let page = req.query.page || 1
    let response = await zAnime.dubbed(page)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
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

const animeDetails = async (req, res) => {
  try {
    let anime = req.query.anime
    if (!anime) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Search Term!!"
    })
    let response = await zAnime.details(anime)
    if (response == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
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

const animeStreamUrl = async (req, res) => {
  try {
    let url = req.query.url
    let server = req.query.server || `vidcloud`
    if (!url) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A Episode URL!!"
    })
    if (!url.includes(BASE_URL)) return res.status(400).send({
      status: 400,
      response: "failed!!",
      reason: "Please Provide A Aniwatch.to Episode URL!!"
    })
    let episodeId = url?.split("watch/")[1]
    let eId = episodeId?.split("?")[0]
    let episode = url.split("?ep=")[1]
    if (!url.includes(episodeId)) {
      return res.status(400).send({
        status: 400,
        response: "failed!!",
        message: "Something Wrong With The URl!!"
      })
    }
    let response = await axios.get(`https://api.consumet.org/anime/zoro/watch?episodeId=${eId}$episode$${episode}$both&server=${server}`)
    if (response.data.message == "") return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "No Results Found!!"
    })
    return res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response.data
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!! Error: "
    })
  }
}
export {
  animeSearch, animeTrending, animeAiring, 
  animeUpcoming, animePopular, animeMovie, 
  animeDetails, animeStreamUrl, animeUpdated,
  animeGenre, animeLatest, animeSpotlight,
  animeOna, animeDub,animeOva,animeSpecial,
  animeComplete,animeTv
}
