const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '홈';
})

app.use(router.routes());
app.use(router.allowedMethods());

const app = new Koa();


app.listen(4000, () => {
    console.log('koa server is listening to port 4000');
})