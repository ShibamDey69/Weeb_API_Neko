import axios from 'axios';
import BodyForm from 'form-data';
import * as fs from 'node:fs';

async function Graph(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
    try {
      const form = new BodyForm();
      form.append("file", fs.createReadStream(Path))
      const data = await axios({
        url: "https://graph.org/upload",
        method: "POST",
        headers: {
          ...form.getHeaders()
        },
        data: form
      })
      return resolve("https://graph.org" + data.data[0].src)
    } catch (err) {
      return reject(new Error(String(err)))
    }
  })
}

export default Graph