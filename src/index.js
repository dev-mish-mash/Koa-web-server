const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());


// 추후 추가구현
app.listen(4000, () => {
    console.log('koa server is listening to port 4000');
})