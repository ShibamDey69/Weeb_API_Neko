import bodyMovie from '../../../scrappers/movie.js';

export const BodyFlixSearch = async (req, res) => {
  try {
    const { title } = req.query;
    const response = await bodyMovie.search(title);
    if(response.status === 200) {
  return  await res.send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data:response
    })
  }
} catch (error) {
   return await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"+error
    })
  }
}

export const BodyFlixWatch = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await bodyMovie.getDetails(id);
    if(response.status === 200) {
  return  await res.send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data:response
    })
  }
} catch (error) {
   return await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"+error
    })
  }
}