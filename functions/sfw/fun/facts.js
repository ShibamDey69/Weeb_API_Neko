import fs from 'node:fs';
let data = JSON.parse(fs.readFileSync('./data/facts.json', 'utf8'))
const facts = async (req, res) => {
  try {
    let random = Math.floor(Math.random() * data.length);
    let response = {
      _id: random,
      fact: data[random]
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

export default facts