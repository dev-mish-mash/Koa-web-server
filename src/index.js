const Koa = require('koa');
const Router = require('koa-router');
require('dotenv').config();

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {
    useMongoClient: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
})

const port = process.env.PORT || 4000;

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

// 추후 추가구현
app.listen(port, () => {
    console.log('koa server is listening to port ' + port);
})