import neko from 'web-screenshot.js';
import * as fs from 'node:fs';
import { tmpdir } from 'node:os';
import graph from '../../../scrappers/graphURL.js';





const screenshot = async (req, res) => {
  try {
    let text = req.query.url
    if (!text) return res.status(404).send({
      status: 404,
      response: "failed!!",
      reason: "Please Provide A URL!!"
    })
    let text1;
    let res1;
    if(text.startsWith("https:/")) {
      text1 = text.replace("https://","")
      res1 = await neko.capture(text)
    } else {
      text1 = text
      res1 = await neko.capture("https://"+text)
    }
    let path = `${tmpdir()}/${Math.random().toString()}.png`
    
    fs.writeFileSync(path,res1)
    let response1 = await graph(path)
    let response = {
      image:response1
    }
    fs.unlinkSync(path)
    return await res.status(200).send({
      creator: global.creator,
      response: "successful!!",
      data: response
    })
  } catch (error) {
    await res.status(500).send({
      status: 500,
      response: "failed!!",
      reason: "An Internal Error Occured!!" 
    })
  }
}

      
export { screenshot }