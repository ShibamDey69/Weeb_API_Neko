import axios from 'axios';
import cheerio from 'cheerio';

export const search = async (text) => {
  try{
let url = "https://bollyflix.foo/search/";
let res = await axios.get(url+text);
let $ = cheerio.load(res.data);
let data = [];
let titles = [];
let links = [];
let images= [];
  $('.title.front-view-title').each((i,el) => {
   let title = $(el).text();
    titles[i] = title
  })
  $('.title.front-view-title a').each((i,el) => {
    let link = $(el).attr('href');
    links[i] = link
  })
  $('.featured-thumbnail img').each((i,el) => {
    let image = $(el).attr('src');
    images[i] = image
  })
  for(let i=0;i<images.length;i++){
 data.push({
   title:titles[i],
   url:links[i],
   img:images[i]
 })
}
  return data;
  } catch(error) {
throw new Error(error);
  }
}

export const getDetails = async (id) => {
  try{
    let url = id.includes("https://")?id:"https://bollyflix.dad/" + id;
let res = await axios.get(url);
let $ = cheerio.load(res.data);
let urls = [];
let qualities= [];
let video = [];
  $('p a.dl').map((i,el) => {
   let url = $(el).attr('href');
    if(url.includes("https://gdflix")) {
    urls.push(url)
    }
  }) 
 let description = $('span#summary').text()?.slice(9)
  $('h5 span').map((i,el) => {
   let quality = $(el).text(); 
    if(!quality.includes(".....")) {
    qualities.push(quality)
    }
  }) 
  for(let i=0;i<urls.length;i++){
 video.push({
   video:{
   url:urls[i],
   quality:qualities[i]
 }
    })
let data = {
   video:video[i],
  description
}
  return data;
}
  } catch(error) {
throw new Error(error);
    }
  }

export default {getDetails,search}