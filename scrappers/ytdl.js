import ytdl from 'ytdl-core';

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


