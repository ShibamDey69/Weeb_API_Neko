import data from '../../../data/truths.json' assert { type: "json" };

const truth = async(req,res) => {
  try {
    let random = Math.floor(Math.random() * data.length);
    let response = {
      _id: random,
      truth:data[random]
    } 
    return await res.status(200).send({
       creator:global.creator,
       response:"successful!!",
       data:response
     })
  } catch (error) {
       await res.status(500).send({
       status: 500,
       response:"failed!!",
       reason: "An Internal Error Occured!! Error: "
     })
  }
}

export default truth