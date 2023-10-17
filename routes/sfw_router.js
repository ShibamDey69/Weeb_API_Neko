import express from 'express';
const router = express.Router()
import facts from '../functions/sfw/fun/facts.js';
import question from '../functions/sfw/fun/question.js';
import truth from '../functions/sfw/fun/truth.js';
import dare from '../functions/sfw/fun/dare.js';
import couplepp from '../functions/sfw/fun/couplepp.js';
import facebook from '../functions/sfw/converters/facebook.js';
import instagram from '../functions/sfw/converters/instagram.js';
import { screenshot } from '../functions/sfw/converters/screenshot.js';
import tiktok from '../functions/sfw/converters/tiktok.js';
import { ytVideo, ytAudio } from '../functions/sfw/converters/youtube.js';
import { animeSearch, animeTrending, animeAiring, animeMovie, animePopular, animeUpcoming, animeDetails, animeStreamUrl,
animeGenre,animeLatest,animeUpdated,animeSpotlight, animeOna, animeDub,animeOva,animeSpecial,animeComplete,animeTv} from '../functions/sfw/anime/aniwatch.js';
import gifs from '../functions/sfw/anime/gifs.js';
import animeNews from '../functions/sfw/anime/news.js';
import { animeId,staffId,characterId, studioId,userId,animeName,staffName, characterName, studioName,userName ,getBirthdayCharacters , getBirthdayStuff} from '../functions/sfw/anime/anilist.js';
import { mangaName, mangaId, chapterAnilist } from '../functions/sfw/manga/anilist.js';
import { mangadex, mangadexId, chapterImageMangadex } from '../functions/sfw/manga/mangadex.js';
import { mangahere, mangahereId, mangahereEpisode } from '../functions/sfw/manga/mangahere.js';
import { mangakakalot, mangakakalotId, mangakakalotEpisode } from '../functions/sfw/manga/mangakakalot.js';
import { asuraSearch,asuraLastUpdate,asuraPopularToday,asuraPopular,asuraPdf,asuraDetails,asuraEpDownloader } from '../functions/sfw/manhwa/asurascans.js';
import {dramaSchoolSearch,dramaSchoolInfo , dramaSchoolEpisode} from '../functions/sfw/k-drama/dramaschool.js';
import { asianSearch, asianInfo, asianEpisode } from '../functions/sfw/k-drama/viewasian.js';
import { google } from '../functions/sfw/search/google.js';




/** FUN Routes */
router.route("/fun/fact").get(facts)
router.route("/fun/question").get(question)
router.route("/fun/truth").get(truth)
router.route("/fun/dare").get(dare)
router.route("/fun/couplepp").get(couplepp)

/** CONVERTERS Routes */
router.route("/converters/facebook").get(facebook)
router.route("/converters/instagram").get(instagram)
router.route("/converters/screenshot/").get(screenshot)
router.route("/converters/tiktok/").get(tiktok)
router.route("/converters/youtube/video").get(ytVideo)
router.route("/converters/youtube/audio").get(ytAudio)




/** ANIME Routes */

/***** ANIWATCH Routes*****/
router.route('/anime/aniwatch/search').get(animeSearch);
router.route('/anime/aniwatch/trending').get(animeTrending);
router.route('/anime/aniwatch/airing').get(animeAiring);
router.route('/anime/aniwatch/upcoming').get(animeUpcoming);
router.route('/anime/aniwatch/popular').get(animePopular);
router.route('/anime/aniwatch/movie').get(animeMovie);
router.route('/anime/aniwatch/info').get(animeDetails);
router.route('/anime/aniwatch/streamurl').get(animeStreamUrl);
router.route('/anime/aniwatch/updated').get(animeUpdated);
router.route('/anime/aniwatch/genres/:genre').get(animeGenre);
router.route('/anime/aniwatch/latest').get(animeLatest);
router.route('/anime/aniwatch/spotlight').get(animeSpotlight);
router.route('/anime/aniwatch/ona').get(animeOna);
router.route('/anime/aniwatch/dub').get(animeDub);
router.route('/anime/aniwatch/ova').get(animeOva);
router.route('/anime/aniwatch/special').get(animeSpecial);
router.route('/anime/aniwatch/completed').get(animeComplete);
router.route('/anime/aniwatch/tv').get(animeTv)

/****** GIF Routes ******/
router.route('/anime/gifs/:gif').get(gifs)

/****** ANIME NEWS Routes ******/
router.route('/anime/news').get(animeNews)

/****** ANILIST Routes ******/
router.route('/anime/anilist/info/:id/').get(animeId)
router.route('/anime/anilist/staff/:id/').get(staffId)
router.route('/anime/anilist/character/:id/').get(characterId)
router.route('/anime/anilist/studio/:id/').get(studioId)
router.route('/anime/anilist/user/:id/').get(userId)
router.route('/anime/anilist/anime/').get(animeName)
router.route('/anime/anilist/staff/').get(staffName)
router.route('/anime/anilist/character/').get(characterName)
router.route('/anime/anilist/studio/').get(studioName)
router.route('/anime/anilist/user/').get(userName)
router.route('/anime/anilist/birthday/').get(getBirthdayCharacters)
router.route('/anime/anilist/birthday/stuff/').get(getBirthdayStuff)

/****** MANGA Routes ******/
/** ANILIST ROUTES */
router.route('/manga/anilist/chapter/').get(chapterAnilist)
router.route('/manga/anilist/search/').get(mangaName)
router.route('/manga/anilist/info/:id').get(mangaId)

/** MANGADEX ROUTES */
router.route('/manga/mangadex/chapter/:id').get(chapterImageMangadex)
router.route('/manga/mangadex/search/').get(mangadex)
router.route('/manga/mangadex/info/:id').get(mangadexId)

/** MANGAHERE ROUTES */
router.route('/manga/mangahere/chapter/:id').get(mangahereEpisode)
router.route('/manga/mangahere/search/').get(mangahere)
router.route('/manga/mangahere/info/:id').get(mangahereId)

/** MANGAKAKALOT ROUTES */
router.route('/manga/mangakakalot/chapter/:id').get(mangakakalotEpisode)
router.route('/manga/mangakakalot/search/').get(mangakakalot)
router.route('/manga/mangakakalot/info/:id').get(mangakakalotId)


/****** MANHWA Routes ******/

/** ASURASCANS ROUTES*/
router.route('/manhwa/asurascans/chapter/').get(asuraEpDownloader)
router.route('/manhwa/asurascans/search/').get(asuraSearch)
router.route('/manhwa/asurascans/info/').get(asuraDetails)
router.route('/manhwa/asurascans/latest').get(asuraLastUpdate)
router.route('/manhwa/asurascans/popular').get(asuraPopular)
router.route('/manhwa/asurascans/popular/today').get(asuraPopularToday)
router.route('/manhwa/asurascans/chapter/pdf').get(asuraPdf)

/** K-DRAMA ROUTES*/

/** DRAMASCHOOL ROUTES */
router.route('/kdrama/dramaschool/search/').get(dramaSchoolSearch)
router.route('/kdrama/dramaschool/info/').get(dramaSchoolInfo)
router.route('/kdrama/dramaschool/episode').get(dramaSchoolEpisode)

/** VIEWASIAN ROUTES*/
router.route('/kdrama/viewasian/search/').get(asianSearch)
router.route('/kdrama/viewasian/info/').get(asianInfo)
router.route('/kdrama/viewasian/episode').get(asianEpisode)

/** SEARCH ROUTES */
router.route("/search/google/search").get(google)
export default router