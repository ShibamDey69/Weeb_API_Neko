## API Reference

All Api Routes Will Use this api_key parameter... to get the api_key contact with me...!


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


### Fun Routes

#### Get a random fun fact

```http
GET `/fun/fact`
```

**Response:**
```json
{
  "fact": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."
}
```

---

#### Get a random fun question

```http
GET `/fun/question`
```

**Response:**
```json
{
  "question": "If you could have dinner with any fictional character, who would it be and why?"
}
```

---

#### Get a random truth for a game

```http
GET `/fun/truth`
```

**Response:**
```json
{
  "truth": "What's the most embarrassing thing that happened to you in the last year?"
}
```

---

#### Get a random dare for a game

```http
GET `/fun/dare`
```

**Response:**
```json
{
  "dare": "Send a silly selfie to the third person in your contact list."
}
```

---

#### Get a random couple profile picture

```http
GET `/fun/couplepp`
```

**Response:**
```json
{
  "couplePP": "https://example.com/couple-image.jpg"
}
```

### Converters Routes

#### Convert Facebook content

```http
GET `/converters/facebook`
```

**Response:**
```json
{
  "convertedContent": "This is the converted content from Facebook."
}
```

---

#### Convert Instagram content

```http
GET `/converters/instagram`
```

**Response:**
```json
{
  "convertedContent": "This is the converted content from Instagram."
}
```

---

#### Take a screenshot

```http
GET `/converters/screenshot/`
```

**Response:**
```json
{
  "screenshotUrl": "https://example.com/screenshot.png"
}
```

---

#### Convert TikTok content

```http
GET `/converters/tiktok/`
```

**Response:**
```json
{
  "convertedContent": "This is the converted content from TikTok."
}
```

---

#### Get YouTube video details

```http
GET `/converters/youtube/video`
```

**Response:**
```json
{
  "videoDetails": {
    "title": "Awesome Video",
    "duration": "10:30",
    "views": 1000000
  }
}
```

---

#### Get YouTube audio details

```http
GET `/converters/youtube/audio`
```

**Response:**
```json
{
  "audioDetails": {
    "title": "Awesome Song",
    "duration": "04:15",
    "likes": 50000
  }
}
```

### Anime Routes

#### Aniwatch Routes

#### Search for anime on Aniwatch

```http
GET `/anime/aniwatch/search?q=Naruto`
```

**Response:**
```json
{
  "results": [
    {
      "title": "Naruto",
      "id": 123,
      "thumbnail": "https://example.com/naruto-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get trending anime on Aniwatch

```http
GET `/anime/aniwatch/trending`
```

**Response:**
```json
{
  "trendingAnime": [
    {
      "title": "Demon Slayer",
      "id": 456,
      "thumbnail": "https://example.com/demon-slayer-thumbnail.jpg"
    },
    // More trending anime...
  ]
}
```

---

#### Get currently airing anime on Aniwatch

```http
GET `/anime/aniwatch/airing`
```

**Response:**
```json
{
  "airingAnime": [
    {
      "title": "My Hero Academia",
      "id": 789,
      "thumbnail": "https://example.com/my-hero-academia-thumbnail.jpg"
    },
    // More airing anime...
  ]
}
```

---

#### Get upcoming anime on Aniwatch

```http
GET `/anime/aniwatch/upcoming`
```

**Response:**
```json
{
  "upcomingAnime": [
    {
      "title": "One Piece",
      "id": 101,
      "thumbnail": "https.example.com/one-piece-thumbnail.jpg"
    },
    // More upcoming anime...
  ]
}
```

---

#### Get popular anime on Aniwatch

```http
GET `/anime/aniwatch/popular`
```

**Response:**
```json
{
  "popularAnime": [
    {
      "title": "Attack on Titan",
      "id": 202,
      "thumbnail": "https://example.com/attack-on-titan-thumbnail.jpg"
    },
    // More popular anime...
  ]
}
```

---

#### Get anime movies on Aniwatch

```http
GET `/anime/aniwatch/movie`
```

**Response:**
```json
{
  "animeMovies": [
    {
      "title": "Spirited Away",
      "id": 303,
      "thumbnail": "https://example.com/spirited-away-thumbnail.jpg"
    },
    // More anime movies...
  ]
}
```

---

#### Get detailed information about an anime on Aniwatch

```http
GET `/anime/aniwatch/info?id=123`
```

**Response:**
```json
{
  "animeInfo": {
    "title": "Naruto",
    "id": 123,
    "description": "A ninja's journey to become the strongest ninja and leader of his village.",
    // More anime information...
  }
}
```

---
```http
GET `/anime/aniwatch/streamurl?id=456`
```

**Response:**
```json
{
  "streamingURL": "https://example.com/anime-stream-url"
}
```

---

#### Get recently updated anime on Aniwatch

```http
GET `/anime/aniwatch/updated`
```

**Response:**
```json
{
  "updatedAnime": [
    {
      "title": "Black Clover",
      "id": 789,
      "thumbnail": "https://example.com/black-clover-thumbnail.jpg"
    },
    // More updated anime...
  ]
}
```

---

#### Get anime by genre on Aniwatch

```http
GET `/anime/aniwatch/genres/action`
```

**Response:**
```json
{
  "genreAnime": [
    {
      "title": "One Punch Man",
      "id": 101,
      "thumbnail": "https://example.com/one-punch-man-thumbnail.jpg"
    },
    // More anime in the action genre...
  ]
}
```

---

#### Get the latest anime on Aniwatch

```http
GET `/anime/aniwatch/latest`
```

**Response:**
```json
{
  "latestAnime": [
    {
      "title": "Demon Slayer",
      "id": 202,
      "thumbnail": "https://example.com/demon-slayer-latest-thumbnail.jpg"
    },
    // More latest anime...
  ]
}
```

---

#### Get spotlight anime on Aniwatch

```http
GET `/anime/aniwatch/spotlight`
```

**Response:**
```json
{
  "spotlightAnime": [
    {
      "title": "Fullmetal Alchemist: Brotherhood",
      "id": 303,
      "thumbnail": "https://example.com/fma-brotherhood-thumbnail.jpg"
    },
    // More spotlight anime...
  ]
}
```

---

#### Get ONA (Original Net Animation) on Aniwatch

```http
GET `/anime/aniwatch/ona`
```

**Response:**
```json
{
  "onaAnime": [
    {
      "title": "Knights of Sidonia",
      "id": 404,
      "thumbnail": "https://example.com/knights-of-sidonia-thumbnail.jpg"
    },
    // More ONA anime...
  ]
}
```

---

#### Get dubbed anime on Aniwatch

```http
GET `/anime/aniwatch/dub`
```

**Response:**
```json
{
  "dubbedAnime": [
    {
      "title": "Cowboy Bebop",
      "id": 505,
      "thumbnail": "https://example.com/cowboy-bebop-thumbnail.jpg"
    },
    // More dubbed anime...
  ]
}
```

---

#### Get OVA (Original Video Animation) on Aniwatch

```http
GET `/anime/aniwatch/ova`
```

**Response:**
```json
{
  "ovaAnime": [
    {
      "title": "Hellsing Ultimate",
      "id": 606,
      "thumbnail": "https://example.com/hellsing-ultimate-thumbnail.jpg"
    },
    // More OVA anime...
  ]
}
```

---

#### Get special episodes on Aniwatch

```http
GET `/anime/aniwatch/special`
```

**Response:**
```json
{
  "specialAnime": [
    {
      "title": "Attack on Titan: No Regrets",
      "id": 707,
      "thumbnail": "https://example.com/aot-no-regrets-thumbnail.jpg"
    },
    // More special episodes...
  ]
}
```

---

#### Get completed anime on Aniwatch

```http
GET `/anime/aniwatch/completed`
```

**Response:**
```json
{
  "completedAnime": [
    {
      "title": "Death Note",
      "id": 808,
      "thumbnail": "https://example.com/death-note-thumbnail.jpg"
    },
    // More completed anime...
  ]
}
```

---

#### Get TV series anime on Aniwatch

```http
GET `/anime/aniwatch/tv`
```

**Response:**
```json
{
  "tvSeriesAnime": [
    {
      "title": "One Piece",
      "id": 909,
      "thumbnail": "https://example.com/one-piece-tv-thumbnail.jpg"
    },
    // More TV series anime...
  ]
}
```

#### Gogoanime Routes

#### Search for anime on Gogoanime

```http
GET `/anime/gogoanime/search?q=One Piece`
```

**Response:**
```json
{
  "results": [
    {
      "title": "One Piece",
      "id": 123,
      "thumbnail": "https://example.com/one-piece-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get information about an anime on Gogoanime

```http
GET `/anime/gogoanime/info?id=123`
```

**Response:**
```json
{
  "animeInfo": {
    "title": "One Piece",
    "id": 123,
    "description": "Join Monkey D. Luffy and his pirate crew in their quest to find the legendary One Piece treasure.",
    // More anime information...
  }
}
```

---

#### Get streaming URL for an episode on Gogoanime

```http
GET `/anime/gogoanime/streamurl?id=456&ep=1`
```

**Response:**
```json
{
  "streamingURL": "https://example.com/one-piece-episode-1-stream-url"
}
```

### GIF Routes

#### Get a GIF

```http
GET `/anime/gifs/thumbs_up`
```

**Response:**
```json
{
  "gifURL": "https://example.com/thumbs-up-gif.gif"
}
```

---

### Anime News Routes

#### Get latest anime news

```http
GET `/anime/news`
```

**Response:**
```json
{
  "news": [
    {
      "title": "Attack on Titan Final Season Release Date Announced",
      "link": "https://example.com/aot-final-season-news"
    },
    // More news...
  ]
}
```

---

### Anilist Routes

#### Get information about an anime by ID

```http
GET `/anime/anilist/info/123`
```

**Response:**
```json
{
  "animeInfo": {
    "title": "Naruto",
    "id": 123,
    "description": "Follow Naruto Uzumaki on his journey to become the Hokage of the Hidden Leaf Village.",
    // More anime information...
  }
}
```

---

#### Get information about a staff member by ID

```http
GET `/anime/anilist/staff/456`
```

**Response:**
```json
{
  "staffInfo": {
    "name": "Masashi Kishimoto",
    "id": 456,
    "bio": "Mangaka and creator of Naruto.",
    // More staff information...
  }
}
```

---

#### Get information about a character by ID

```http
GET `/anime/anilist/character/789`
```

**Response:**
```json
{
  "name": "Naruto Uzumaki",
  "id": 789,
  "description": "The main protagonist of the Naruto series. A ninja with a dream of becoming the strongest ninja and leader of his village.",
  // More character information...
}
```

---

#### Get information about a studio by ID

```http
GET `/anime/anilist/studio/101`
```

**Response:**
```json
{
  "studioInfo": {
    "name": "Studio Pierrot",
    "id": 101,
    "description": "A Japanese animation studio known for producing popular anime series like Naruto and Tokyo Ghoul.",
    // More studio information...
  }
}
```

---

#### Get information about a user by ID

```http
GET `/anime/anilist/user/202`
```

**Response:**
```json
{
  "userInfo": {
    "username": "AnimeFan202",
    "id": 202,
    "bio": "Passionate anime enthusiast who loves exploring new genres.",
    // More user information...
  }
}
```

---

#### Search for anime on Anilist

```http
GET `/anime/anilist/search?q=One Piece`
```

**Response:**
```json
{
  "results": [
    {
      "title": "One Piece",
      "id": 123,
      "thumbnail": "https://example.com/one-piece-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Search for staff on Anilist

```http
GET `/anime/anilist/staff?q=Masashi Kishimoto`
```

**Response:**
```json
{
  "results": [
    {
      "name": "Masashi Kishimoto",
      "id": 456,
      "thumbnail": "https://example.com/masashi-kishimoto-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Search for characters on Anilist

```http
GET `/anime/anilist/character?q=Naruto Uzumaki`
```

**Response:**
```json
{
  "results": [
    {
      "name": "Naruto Uzumaki",
      "id": 789,
      "thumbnail": "https://example.com/naruto-uzumaki-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Search for studios on Anilist

```http
GET `/anime/anilist/studio?q=Studio Pierrot`
```

**Response:**
```json
{
  "results": [
    {
      "name": "Studio Pierrot",
      "id": 101,
      "thumbnail": "https://example.com/studio-pierrot-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Search for users on Anilist

```http
GET `/anime/anilist/user?q=AnimeFan202`
```

**Response:**
```json
{
  "results": [
    {
      "username": "AnimeFan202",
      "id": 202,
      "thumbnail": "https://example.com/animefan202-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get characters with birthdays

```http
GET `/anime/anilist/birthday`
```

**Response:**
```json
{
  "birthdayCharacters": [
    {
      "name": "Sakura Haruno",
      "birthday": "March 28",
      // More character information...
    },
    // More characters with birthdays...
  ]
}
```

---

#### Get staff with birthdays and their works

```http
GET `/anime/anilist/birthday/stuff`
```

**Response:**
```json
{
  "birthdayStaff": [
    {
      "name": "Hayao Miyazaki",
      "birthday": "January 5",
      "works": [
        {
          "title": "Spirited Away",
          "id": 303,
          // More work information...
        },
        // More works...
      ]
    },
    // More staff with birthdays and works...
  ]
}
```

### Manga Routes

#### Anilist Routes

#### Get information about a manga chapter on Anilist

```http
GET `/manga/anilist/chapter/123`
```

**Response:**
```json
{
  "chapterInfo": {
    "title": "Chapter 1",
    "id": 123,
    "mangaTitle": "One Piece",
    // More chapter information...
  }
}
```

---

#### Search for manga on Anilist

```http
GET `/manga/anilist/search?q=One Piece`
```

**Response:**
```json
{
  "results": [
    {
      "title": "One Piece",
      "id": 123,
      "thumbnail": "https://example.com/one-piece-manga-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get information about a manga on Anilist

```http
GET `/manga/anilist/info/123`
```

**Response:**
```json
{
  "mangaInfo": {
    "title": "One Piece",
    "id": 123,
    "description": "Follow Monkey D. Luffy and his pirate crew in their quest for the legendary One Piece treasure.",
    // More manga information...
  }
}
```

#### Mangadex Routes

#### Get information about a chapter on Mangadex

```http
GET `/manga/mangadex/chapter/456`
```

**Response:**
```json
{
  "chapterInfo": {
    "title": "Chapter 10",
    "id": 456,
    "mangaTitle": "Attack on Titan",
    // More chapter information...
  }
}
```

---

#### Search for manga on Mangadex

```http
GET `/manga/mangadex/search?q=Attack on Titan`
```

**Response:**
```json
{
  "results": [
    {
      "title": "Attack on Titan",
      "id": 123,
      "thumbnail": "https://example.com/aot-mangadex-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get information about a manga on Mangadex

```http
GET `/manga/mangadex/info/123`
```

**Response:**
```json
{
  "mangaInfo": {
    "title": "Attack on Titan",
    "id": 123,
    "description": "In a world where humanity resides within enormous walled cities, the remnants of civilization are threatened by giant humanoid creatures.",
    // More manga information...
  }
}
```

### Manhwa Routes

#### Asurascans Routes

#### Get information about a chapter on Asurascans

```http
GET `/manhwa/asurascans/chapter/123`
```

**Response:**
```json
{
  "chapterInfo": {
    "title": "Chapter 5",
    "id": 123,
    "manhwaTitle": "Solo Leveling",
    // More chapter information...
  }
}
```

---

#### Search for manhwa on Asurascans

```http
GET `/manhwa/asurascans/search?q=Solo Leveling`
```

**Response:**
```json
{
  "results": [
    {
      "title": "Solo Leveling",
      "id": 123,
      "thumbnail": "https://example.com/solo-leveling-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get information about a manhwa on Asurascans

```http
GET `/manhwa/asurascans/info/123`
```

**Response:**
```json
{
  "manhwaInfo": {
    "title": "Solo Leveling",
    "id": 123,
    "description": "In a world where people awaken supernatural abilities, Sung Jin-Woo is the weakest of the rank E hunters and barely stronger than a normal human. He is nicknamed by his fellow hunters as 'the weakest'.",
    // More manhwa information...
  }
}
```

---

#### Get the latest chapters of popular manhwa on Asurascans

```http
GET `/manhwa/asurascans/popular/today`
```

**Response:**
```json
{
  "popularToday": [
    {
      "title": "Solo Leveling",
      "id": 123,
      "thumbnail": "https://example.com/solo-leveling-thumbnail.jpg"
    },
    // More popular manhwa today...
  ]
}
```

---

#### Get popular manhwa on Asurascans

```http
GET `/manhwa/asurascans/popular`
```

**Response:**
```json
{
  "popularManhwa": [
    {
      "title": "Tower of God",
      "id": 456,
      "thumbnail": "https://example.com/tower-of-god-thumbnail.jpg"
    },
    // More popular manhwa...
  ]
}
```

---

#### Get details and chapters of popular manhwa on Asurascans

```http
GET `/manhwa/asurascans/details/456`
```

**Response:**
```json
{
  "manhwaDetails": {
    "title": "Tower of God",
    "id": 456,
    "description": "Bam, who was alone all his life has entered the tower to chase after his only friend, Rachel, but how will he survive without having any special strength or power?",
    // More manhwa details...
  }
}
```

---

#### Download PDF of a chapter from popular manhwa on Asurascans

```http
GET `/manhwa/asurascans/chapter/pdf/456`
```

**Response:**
```json
{
  "pdfDownloadLink": "https://example.com/tower-of-god-chapter-5-pdf"
}
```

### K-Drama Routes

#### Dramaschool Routes

#### Search for K-Drama on Dramaschool

```http
GET `/kdrama/dramaschool/search?q=Crash Landing on You`
```

**Response:**
```json
{
  "results": [
    {
      "title": "Crash Landing on You",
      "id": 123,
      "thumbnail": "https://example.com/crash-landing-on-you-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get information about a K-Drama on Dramaschool

```http
GET `/kdrama/dramaschool/info/123`
```

**Response:**
```json
{
  "dramaInfo": {
    "title": "Crash Landing on You",
    "id": 123,
    "description": "A South Korean heiress crashes her paraglider into North Korea and falls in love with a North Korean army officer.",
    // More drama information...
  }
}
```

---

#### Get streaming URL for an episode of a K-Drama on Dramaschool

```http
GET `/kdrama/dramaschool/episode/123`
```

**Response:**
```json
{
  "streamingURL": "https://example.com/crash-landing-on-you-episode-1-stream-url"
}
```

#### Viewasian Routes

#### Search for K-Drama on Viewasian

```http
GET `/kdrama/viewasian/search?q=Itaewon Class`
```

**Response:**
```json
{
  "results": [
    {
      "title": "Itaewon Class",
      "id": 456,
      "thumbnail": "https://example.com/itaewon-class-thumbnail.jpg"
    },
    // More results...
  ]
}
```

---

#### Get information about a K-Drama on Viewasian

```http
GET `/kdrama/viewasian/info/456`
```

**Response:**
```json
{
  "dramaInfo": {
    "title": "Itaewon Class",
    "id": 456,
    "description": "After a traumatic event, a young man starts a bar in Itaewon and seeks success while facing various challenges.",
    // More drama information...
  }
}
```

---

#### Get streaming URL for an episode of a K-Drama on Viewasian

```http
GET `/kdrama/viewasian/episode/456`
```

**Response:**
```json
{
  "streamingURL": "https://example.com/itaewon-class-episode-1-stream-url"
}
```

