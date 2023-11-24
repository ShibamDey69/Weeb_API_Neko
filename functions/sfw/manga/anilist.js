import { META } from '@consumet/extensions';
let anilist = new META.Anilist.Manga();


export async function mangaId(req, res) {
  try {
    let id = req.params.id
    let provider = req.query.provider || "mangareader"
    if (!id) return res.status(400).json({
      status: 400,
      response: "failed!!",
      reason: "Please Provide Name Or ID!!",
    });

    if (isNaN(id)) {
      return await res.status(400).json({
        status: 400,
        response: "failed!!",
        reason: "Please Provide ID!!",
      });
    }
    if (provider !== "mangareader") {
      anilist = new META.Anilist.Manga(provider);
    }
    let response = await anilist
        .fetchMangaInfo(Number(id));

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
      reason: "An Internal Error Occured!! or No Such Id Exists!! "
    })
  }
}

export async function mangaName(req, res) {
  try {
    let q = req.query.q;
    if (!q) return res.status(400).json({
      status: 400,
      response: "failed!!",
      reason: "Please Provide Name !!",
    });
    
    let response =  await anilist.search(q);
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
      reason: "Please Provide ID!!",
    });
    if (provider !== "mangareader") {
      anilist = new META.Anilist.Manga(provider);
    }
    let response = await anilist
    .fetchChapterPages(Number(chapterId))
    return await res.status(200).send({
      status: 200,
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
