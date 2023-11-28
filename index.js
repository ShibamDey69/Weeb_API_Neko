import express from 'express';
const app = express()
import mongose from 'mongoose';
import cors from 'cors';
import {authenticateKey} from './MiddleWare/auth.js';
let MONGODB_URI = process.env.MONGODB_URL || "mongodb+srv://neko:1234@neko.tta6hjs.mongodb.net/?retryWrites=true&w=majority";
global.creator = "NekoSenpai"
const PORT = process.env.PORT || 8080;
import routes from './routes/user_router.js'
import nsfw_routes from './routes/nsfw_router.js'
import sfw_routes from './routes/sfw_router.js'

app.use(cors())
app.use(express.json())
app.set('json spaces', 4)
app.use('/', routes);
app.use('/weeb/api/nsfw',authenticateKey, nsfw_routes)
app.use('/weeb/api/sfw',authenticateKey,sfw_routes)

mongose.connect(MONGODB_URI).then(
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
})).catch(err => {
  console.log(err)
})
