import axios from 'axios'
import cheerio from 'cheerio'
import CryptoJS from 'crypto-js';

const keys = {
    key: CryptoJS.enc.Utf8.parse('37911490979715163134003223491201'),
    second_key: CryptoJS.enc.Utf8.parse('54674138327930866480207815084989'),
    iv: CryptoJS.enc.Utf8.parse('3134003223491201'),
};


 async function generateEncryptAjaxParameters($, id) {
    // encrypt the key
    const encrypted_key = CryptoJS.AES['encrypt'](id, keys.key, {
        iv: keys.iv,
    });

    const script = $("script[data-name='episode']").data().value;
    const token = CryptoJS.AES['decrypt'](script, keys.key, {
        iv: keys.iv,
    }).toString(CryptoJS.enc.Utf8);

    return `id=${encrypted_key}&alias=${id}&${token}`;
}


 function decryptEncryptAjaxResponse(obj) {
    const decrypted = CryptoJS.enc.Utf8.stringify(
        CryptoJS.AES.decrypt(obj.data, keys.second_key, {
            iv: keys.iv,
        })
    );
    return JSON.parse(decrypted);
}


  export default class GogoAnime {
     
  constructor() {
    this.base_url = `https://anitaku.to`;
    this.search_url = `${this.base_url}/search.html?keyword=`;
    this.info_url = `${this.base_url}/category/`;
  }

  async search(query,page = 0) {
    let url = `${this.search_url}${query}&page=${page}`;
    let res = await axios.get(url)
    let $ = cheerio.load(res.data)
    let data = $('ul.items > li > div.img').map((i, e) => {
      return {
        id:$(e).find("a")
        .attr("href")
        .replaceAll("/category/",""),
        title: $(e).find("a").attr("title"),
        img:$(e).find("img").attr("src")
      }
    }).get()
    return data;
  }
  
  async info(vid) {
  let url = `${this.info_url}${vid}`
  let html = await axios.get(url)
  let $ = cheerio.load(html.data)
    
  let id = $('.anime_info_episodes_next input').attr("value")
    
  let ep_end = $('ul#episode_page li').find("a").map((i, e) => $(e).attr('ep_end')).get()

  let ScrapeUrl = `https://ajax.gogo-load.com/ajax/load-list-episode`
    
  let res = await axios.get(ScrapeUrl+`?ep_start=0&ep_end=${ep_end[ep_end.length-1]}&id=${id}&default_ep=0&alias=${vid}`,{
    headers:{
      "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    }
  })
    
  let $$ = cheerio.load(res.data)
  
  let ep = $$('#episode_related li').map((i,data)=> {
   return $(data).find('a')
     .attr('href')
     .replaceAll(" /","")
  
}).get()

  let data = $('.anime_info_body_bg')
    .map((i,el) =>  {
      
    return {
      title:$(el).find('h1').text(),
      img:$(el).find('img').attr('src'),
      summary:$(el).find('p.type')
       .text()
       .split("\n")[2]
       .replaceAll("\t",""),
      episode_id:ep.reverse()
    }
  }).get()
  return data
  }

  async episode(ep_id) {

      let response = await axios.get(`${this.base_url}/${ep_id}`)
      let $ = cheerio.load(response.data)
      let resp = $('div.anime_video_body_watch_items.load iframe').attr('src')
    
      const serverUrl = new URL(resp)
      
      const goGoServerPage = await axios.get(serverUrl.href, {
       headers: { 'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36" },
      });
      
      const $$ = cheerio.load(goGoServerPage.data);

      const params = await generateEncryptAjaxParameters(
  $$,serverUrl.searchParams.get('id')
      );

      const fetchRes = await axios.get(
       `
${serverUrl.protocol}//${serverUrl.hostname}/encrypt-ajax.php?${params}`,
       {
        headers: {
         'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
         'X-Requested-With': 'XMLHttpRequest',
        },
       }
      );

      const res = decryptEncryptAjaxResponse(fetchRes.data);

      if (!res.source) return { error: 'No sources found!!' };

      return ({
       sources: res.source,
       sources_2: res.source_bk,
      });
    }
  
}


    