import axios from 'axios';

export default class NekoYtdl {
  constructor() {}
   mp4 = async (url,quality) => {
     try {
    const formData = new URLSearchParams();
    formData.append('query', url);
    formData.append('vt', 'downloader');
    let res = await axios.post("https://tomp3.cc/api/ajax/search",formData);
    const FormData = new URLSearchParams();
    let qlty =  {
      "144p": "17",
      "240p": "133",
      "360p": "18",
      "720p": "22",
      "1080p": "137",
      "auto": "auto"
    }
    let k = res.data.links.mp4[qlty[quality]].k;
    FormData.append('vid',res.data.vid);
    FormData.append('k', k);
    let response = await axios.post("https://tomp3.cc/api/ajax/convert",FormData);
    return response.data;
     } catch (error) {
       throw new Error(error);
     }
  }

  mp3 = async (url) => {
    try {
    const formData = new URLSearchParams();
    formData.append('query', url);
    formData.append('vt', 'downloader');
    let res = await axios.post("https://tomp3.cc/api/ajax/search",formData);
    const FormData = new URLSearchParams();
    
    let k = res.data.links.mp3['mp3128'].k;
    FormData.append('vid',res.data.vid);
    FormData.append('k', k);
    let response = await axios.post("https://tomp3.cc/api/ajax/convert",FormData);
    return response.data;
    } catch (error) {
      throw Error(error)
    }
  }
}
/*import ytdl from 'ytdl-core';

export default class NekoYtdl {
   constructor() {}
  async mp4(url,quality = "360p") {

    const videoInfo = await ytdl.getInfo(url);

             let format = ytdl.chooseFormat(videoInfo.formats, {
        format: quality,
        filter:"videoandaudio" 
});
    return format.url;
  }

  
  async mp3(url) {
    
    const videoInfo = await ytdl.getInfo(url);

   let format = ytdl.chooseFormat(videoInfo.formats, {
filter:"audioonly" 
});
    return format.url;
  }
}
*/

