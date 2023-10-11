import Anilist from 'anilist-node';
let anilist = new Anilist();
let neko =  anilist.searchEntry
/** ANILIST ID SEARCH*/
export async function animeId (req, res) {
try {
  let id  = req.query.id;
  if (!id) return res.status(400).json({
    status: 400,
    response: "failed!!",
    readon: "Please Provide Name Or ID!!",
  });
  
    if(isNaN(id)) {
      return await res.status(400).json({
        status: 400,
        response: "failed!!",
        reason: "Please Provide ID!!",
      });
    }
    let ids = Number(id);
    let response = await anilist.media.anime(ids)
    
  return await res.status(200).send({
    status: 200,
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

export async function staffId (req, res) {
try {
  let id  = req.query.id;
  if (!id) return res.status(400).json({
    status: 400,
    response: "failed!!",
    readon: "Please Provide ID!!",
  });
    
    if(isNaN(id)) {
      return await res.status(400).json({
        status: 400,
        response: "failed!!",
        reason: "Please Provide ID!!",
      })
    }
   let ids = Number(id);
   let response = await anilist.people.staff(ids);
    return await res.status(200).send({
    status: 200,
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

export async function characterId (req, res) {
try {
  let id  = req.query.id;
  if (!id) return res.status(400).json({
    status: 400,
    response: "failed!!",
    readon: "Please Provide ID!!",
  });
    
    if(isNaN(id)) {
      return await res.status(400).json({
        status: 400,
        response: "failed!!",
        reason: "Please Provide ID!!",
      })
    }
   let ids = Number(id);
   let response = await anilist.people.character(ids);
    return await res.status(200).send({
    status: 200,
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

export async function studioId (req, res) {
  try {
    let id  = req.query.id;
    if (!id) return res.status(400).json({
      status: 400,
      response: "failed!!",
      readon: "Please Provide ID!!",
    });
    
      if(isNaN(id)) {
        return await res.status(400).json({
          status: 400,
          response: "failed!!",
          reason: "Please Provide ID!!",
        })
        }
     let ids = Number(id);
     let response = await anilist.studio(ids);
    
  return await res.status(200).send({
    status: 200,
    response: "successful!!",
    data: response
     })
   } catch (error) {
    await res.status(500).json({
      status: 500,
      response: "failed!!",
      error: "An Internal Error Occured!! or No Such Id Exists!! "
    })
   }
 }

export async function userId (req,res) {
    try {
      let id  = req.query.id;
      if (!id) return res.status(400).json({
        status: 400,
        response: "failed!!",
        readon: "Please Provide ID!!",
      });
        
        if(isNaN(id)) {
          return await res.status(400).json({
            status: 400,
            response: "failed!!",
            reason: "Please Provide ID!!"
          })
        }
      let ids = Number(id);
      let response = await anilist.user.all(ids);
      return await res.status(200).send({
        status: 200,
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

/** ANILIST NAME SEARCH*/

export async function animeName (req, res) {
 try {
  let name  = req.query.name;
  let filter = req.query.filter || null;
  let page = req.query.page || 1;
  let amount = req.query.amount || 8;
  if (!name) return res.status(400).json({
    status: 400,
    response: "failed!!",
    reason: "Please Provide Name !!",
  });
  
  let response = await neko.anime(name, filter,page,amount);
  
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

export async function staffName (req, res) {
 try {
  let name  = req.query.name;
  let page = req.query.page || 1;
  let amount = req.query.amount || 8;
  if (!name) return res.status(400).json({
    status: 400,
    response: "failed!!",
    reason: "Please Provide Name !!",
  });
  
  let response = await neko.staff(name,page,amount);
  
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

export async function characterName (req, res) {
 try {
   let name  = req.query.name;
   let page = req.query.page || 1;
   let amount = req.query.amount || 8;
  
  if (!name) return res.status(400).json({
    status: 400,
    response: "failed!!",
    reason: "Please Provide Name !!",
  });
   
   
  let response =  await neko.character(name,page,amount);
  
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

export async function studioName (req, res) {
 try {
  let name  = req.query.name;
  let page = req.query.page || 1;
  let amount = req.query.amount || 8;
   
  if (!name) return res.status(400).json({
    status: 400,
    response: "failed!!",
    reason: "Please Provide Name !!",
  });
  
  let response = await neko.studio(name,page,amount);
  
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

export async function userName (req, res) {
 try {
  let name  = req.query.name;
  let page = req.query.page || 1;
  let amount = req.query.amount || 8;
  if (!name) return res.status(400).json({
    status: 400,
    response: "failed!!",
    reason: "Please Provide Name !!",
  });
  
  let response = await neko.user(name,page,amount);
  
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


/** ANILIST BIRTHDAY */
export async function getBirthdayCharacters (req, res) {
 try {
  let page = req.query.page || 1;
  let response = await anilist.people.getBirthdayCharacters(page);
  return await res.status(200).send({
    status: 200,
    response: "successful!!",
    data: response
     })
   } catch (error) {
   console.log(error);
   await res.status(500).json({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!"
    })
  }
}

export async function getBirthdayStuff (req, res) {
 try {
  let page = req.query.page || 1;
  let response = await anilist.people.getBirthdayStuff(page);
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