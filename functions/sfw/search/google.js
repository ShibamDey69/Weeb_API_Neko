import googleIt from 'google-it';

export async function google(req, res) {
  try {
    let q = req.query.q;
    if (!q) return await res.send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide Query!!",
    });
    const results = await googleIt({ query: q })
    return await res.send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data: results
    })
  } catch (error) {
    await res.send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}
