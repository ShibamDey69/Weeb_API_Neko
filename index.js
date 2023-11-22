import express from 'express';
const app = express()
import bodyParser from 'body-parser';
import os from 'node:os';
import mongose from 'mongoose';
import cluster from 'node:cluster';
import {authenticateKey} from './Auth/auth.js';
let MONGODB_URI = process.env.MONGO_URI || "mongodb+srv://neko:1234@neko.tta6hjs.mongodb.net/?retryWrites=true&w=majority";
const numCPUs = os.cpus().length;
global.creator = "NekoSenpai"
const PORT = process.env.PORT || 8080;
import routes from './routes/router.js'
import nsfw_routes from './routes/nsfw_router.js'
import sfw_routes from './routes/sfw_router.js'
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.set('json spaces', 2)
app.use('/', routes);
app.use('/weeb/api/nsfw',authenticateKey, nsfw_routes)
app.use('/weeb/api/sfw',authenticateKey,sfw_routes)

mongose.connect(MONGODB_URI).then(
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
}))
