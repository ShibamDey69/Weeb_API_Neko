import fs from 'node:fs';
let data = JSON.parse(fs.readFileSync('./data/couplepp.json', 'utf8'))
const couplepp = async (req, res) => {
  try {
    let random = Math.floor(Math.random() * data.length);
    let response = {
      _id: random,
      couplepp: {
        male: data[random].male,
        female: data[random].female
      }
    }
    return await res.status(200).send({
      status: 200,
      creator: global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!! Error: "
    })
  }
}

export default couplepp