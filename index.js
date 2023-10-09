import express from 'express';
const app = express()
import bodyParser from 'body-parser';
global.creator = "NekoSenpai"
const PORT = process.env.PORT || 8080;
import routes from './routes/router.js'
import nsfw_routes from './routes/nsfw_router.js'
import sfw_routes from './routes/sfw_router.js'
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
//app.use('/')
app.set('json spaces', 2)
app.use('/weeb/api', routes);
app.use('/weeb/api/nsfw', nsfw_routes)
app.use('/weeb/api/sfw', sfw_routes)

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
})
