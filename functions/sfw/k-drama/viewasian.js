import { MOVIES } from '@consumet/extensions';
const viewAsian = new MOVIES.ViewAsian();


export async function asianSearch(req, res) {
  let { q } = req.query;
  let page = req.query.page || 1;
   
  if (!q) return res.status(400).send({
    status:404,
    response:"failed!!",
    reason:"No query provided!"
  })
  try {
    let response = await viewAsian.search(q,Number(page));
    if(response.results == "") 
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
  let { id ,type } = req.params;
  if (!id) return res.status(400).send({
    status:404,
    response:"failed!!",
    reason:"No id provided!"
  })
  try {
    let response = await viewAsian
      .fetchMediaInfo(`${type}/${id}`);
    if(response.results == "")
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
  let episodeId = req.params.id;
  let server = req.query.server || "asianload";
  if (!id) return res.status(400).send({
    status:404,
    response:"failed!!",
    message:"No id provided!"
  })
  if (!episodeId) return res.status(400).send({
    status:404,
    response:"failed!!",
    message:"No episode provided!"
  })
  try {
    let response = await viewAsian
        .fetchEpisodeSources(episodeId, server);
    if(response.results == "") 
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