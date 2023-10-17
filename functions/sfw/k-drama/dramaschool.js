import axios from 'axios';

export async function dramaSchoolSearch(req, res) {
  let { query } = req.query;
  let page = req.query.page || 1;
  page = Number(page)
  if (!query) return res.status(400).send({
    status:400,
    response:"failed!!",
    reason:"No query provided!"
  })
  try {
    const movie = await axios.get(`https://api.consumet.org/movies/dramacool/${query}`, { params: { page: page } });

    let response = movie.data;
    if(response.resluts == "") 
      return await res.send({
      status:400,
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

export async function dramaSchoolInfo(req, res) {
  let { id } = req.query;
  if (!id) return res.status(400).send({
    status:400,
    response:"failed!!",
    reason:"No id provided!"
  })
  try {
    const movie = await axios.get(`https://api.consumet.org/movies/dramacool/info?id=${id}`);
    let response = movie.data;
    if(response.resluts == "") 
      return await res.send({
      status:400,
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

export async function dramaSchoolEpisode(req, res) {
  let mediaId = req.query.id
  let episodeId = req.query.episode;
  let server = req.query.server || "asianload";
  if(!mediaId) return res.status(400).send({
    status:400,
    response:"failed!!",
    reason:"No mid provided!"
  })
  if (!episodeId) return res.status(400).send({
    status:400,
    response:"failed!!",
    reason:"No episode provided!"
  })
  try {
    const movie = await axios.get(`https://api.consumet.org/movies/dramacool/watch?episodeId=${episodeId}&mediaId=${mediaId}&server=${server}`);
    let response = movie.data;
    if(response.resluts == "") 
      return await res.send({
      status:400,
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