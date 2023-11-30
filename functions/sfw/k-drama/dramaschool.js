import { MOVIES } from '@consumet/extensions';
const dramacool = new MOVIES.DramaCool();


export async function dramaSchoolSearch(req, res) {
  let { q } = req.query;
  let page = req.query.page || 1;
   
  if (!q) return res.status(400).send({
    status:400,
    response:"failed!!",
    reason:"No query provided!"
  })
  try {
    const response = await dramacool.search(q, Number(page));

    
    if(response.results == "") 
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
  let { id,type } = req.params;
  if (!id) return res.status(400).send({
    status:400,
    response:"failed!!",
    reason:"No id provided!"
  })
  try {
    const response = await dramacool
    .fetchMediaInfo(`${type}/${id}`)
    
    if(response.results == "") 
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
  let episodeId = req.params.id;
 
  if (!episodeId) return res.status(400).send({
    status:400,
    response:"failed!!",
    reason:"No episode provided!"
  })
  try {
    const response = await dramacool
    .fetchEpisodeSources(episodeId)
    
    if(response.results == "") 
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