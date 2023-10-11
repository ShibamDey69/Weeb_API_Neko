import axios from 'axios';


export async function mangakakalot (req, res) {
  try {
   let name  = req.query.name;
   if (!name) return res.status(400).json({
     status: 400,
     response: "failed!!",
     reason: "Please Provide Name !!",
   });
   
   let response = await axios.get(`https://api.consumet.org/manga/mangakakalot/${name}`);
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
       reason: "An Internal Error Occured!!"
     })
  }
}

export async function mangakakalotId (req, res) {
 try {
  let id  = req.params.id;
  if (!id) return res.status(400).json({
    status: 400,
    response: "failed!!",
    reason: "Please Provide Name !!",
  });
  
  let response = await axios.get(`https://api.consumet.org/manga/mangakakalot/info`, { params: { id: id } });
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
    reason: "An Internal Error Occured!!"
      })
   }
}

export async function mangakakalotEpisode (req, res) {
 try {
  let id  = req.params.id;
  if (!id) return res.status(400).json({
    status: 400,
    response: "failed!!",
    reason: "Please Provide Name !!",
  });
  
  let response = await axios.get(`https://api.consumet.org/manga/mangakakalot/read?chapterId=${id}`);
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
    reason: "An Internal Error Occured!!"
      })
   }
}