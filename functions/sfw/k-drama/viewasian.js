import axios from 'axios';

export async function asianSearch(req, res) {
  let { query } = req.query;
  let page = req.query.page || 1;
  page = Number(page)
  if (!query) return res.status(400).send({
    status:404,
    response:"failed!!",
    reason:"No query provided!"
  })
  try {
    const movie = await axios.get(`https://api.consumet.org/movies/viewasian/${query}?page=${page}`);
    let response = movie.data;
    if(response.resluts == "") 
      return await res.send({
      status:404,
      response:"failed!!",
      reason:"No results found!"
    })
    return await res.status(200).send({
            status:200,
            creator:global.creator,
            response:"successful!!",
            data:response
          });
    } catch (error) {
      return res.status(500).send({
      status:500,
      response:"failed!!",
      reason:"An Error Occurred!!"
    })
  }
}

export async function asianInfo(req, res) {
  let { id } = req.query;
  if (!id) return res.status(400).send({
    status:404,
    response:"failed!!",
    reason:"No id provided!"
  })
  try {
    const movie = await axios.get(`https://api.consumet.org/movies/viewasian/info?id=${id}`);
    let response = movie.data;
    if(response.resluts == "")
      return await res.status(404).send({
      status:404,
      response:"failed!!",
      reason:"No results found!"
    })
    return await res.status(200).send({
            status:200,
            creator:global.creator,
            response:"successful!!",
            data:response
          });
    } catch (error) {
      return res.status(500).send({
      status:500,
      response:"failed!!",
      reason:"An Error Occurred!!"
    })
  }
}

export async function asianEpisode(req, res) {
  let { id } = req.query;
  let episode = req.query.episode;
  let server = req.query.server || "asianload";
  if (!id) return res.status(400).send({
    status:404,
    response:"failed!!",
    message:"No id provided!"
  })
  if (!episode) return res.status(400).send({
    status:404,
    response:"failed!!",
    message:"No episode provided!"
  })
  try {
    const movie = await axios.get(`https://api.consumet.org/movies/viewasian/watch?episodeId=${episode}&mediaId=${id}&server=${server}`);
    let response = movie.data;
    if(response.resluts == "") 
      return await res.send({
      status:404,
      response:"failed!!",
      reason:"No results found!"
    })
    return await res.status(200).send({
            status:200,
            creator:global.creator,
            response:"successful!!",
            data:response
          });
    } catch (error) {
      return res.status(500).send({
      status:500,
      response:"failed!!",
      reason:"An Error Occurred!!"
    })
  }
}