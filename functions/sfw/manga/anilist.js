import Anilist from 'anilist-node';
let anilist = new Anilist();
let neko = anilist.searchEntry;
import axios from 'axios'; 


export async function mangaId(req, res) {
  try {
    let id = req.params.id
    let provider = req.query.provider || "mangareader"
    if (!id) return res.status(400).json({
      status: 400,
      response: "failed!!",
      readon: "Please Provide Name Or ID!!",
    });

    if (isNaN(id)) {
      return await res.status(400).json({
        status: 400,
        response: "failed!!",
        reason: "Please Provide ID!!",
      });
    }
    let ids = Number(id);
    let response = await axios.get(`https://api.consumet.org/meta/anilist-manga/info/${id}?provider=${provider}`)

    return await res.status(200).send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data: response.data
    })
  } catch (error) {
    await res.status(500).json({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!! or No Such Id Exists!! "
    })
  }
}

export async function mangaName(req, res) {
  try {
    let name = req.query.name;
    let filter = req.query.filter || null;
    let page = req.query.page || 1;
    let amount = req.query.amount || 8;
    if (!name) return res.status(400).json({
      status: 400,
      response: "failed!!",
      reason: "Please Provide Name !!",
    });
    page = Number(page);
    let response = await neko.manga(name, filter, page, amount);
    return await res.status(200).send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.status(500).json({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function chapterAnilist(req, res) {
  try {
    let chapterId = req.query.id;
    let provider = req.query.provider || "mangareader";
    if (!chapterId) return res.status(400).json({
      status: 400,
      response: "failed!!",
      readon: "Please Provide ID!!",
    });
    let response = await axios.get(`https://api.consumet.org/meta/anilist-manga/read`,{ params: { chapterId: chapterId, provider: provider } })
    return await res.status(200).send({
      status: 200,
      response: "successful!!",
      data: response.data
    })
    
  } catch (error) {
    await res.status(500).json({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}
    