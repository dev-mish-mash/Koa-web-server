const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 
    {
        SurveryMBTI: [
            {
                index: 1,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                index: 2,
                description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                index: 3,
                description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {
                index: 4,
                description: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
            },
        ]
    };
});

app.listen(4000, () => {
    console.log('koa server is listening to port 4000');
})