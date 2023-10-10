let headers = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Length': '14',
  'Content-Type': 'application/json;charset=UTF-8',
  'Origin': 'https://waifu.pics',
  'Referer': 'https://waifu.pics/',
  'Sec-Ch-Ua': '"Not/A)Brand";v="99", "Brave";v="115", "Chromium";v="115"',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}
import axios from 'axios';

let gifScrape = async(text,sf) => {
    try {
 const url = "https://api.waifu.pics/many/"+sf+text;
  const payload = {
    exclude : []
  }
  const res = await axios.post(url,payload,{headers})
  const data = res?.data.files;
    return data;
      } catch (error) {
       return error;
    }
}

export default gifScrape