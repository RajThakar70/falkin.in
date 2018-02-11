const router = require('koa-router')()
const sendfile = require('koa-sendfile')

const data = require('./datas.json');
const dataPie = [
                  {name: 'January', value: 400}, {name: 'February', value: 300},
                  {name: 'March', value: 300}, {name: 'April', value: 200},
                  {name: 'May', value: 278}, {name: 'June', value: 189},
                  {name: 'July', value: 400}, {name: 'August', value: 300},
                  {name: 'Septmber', value: 300}, {name: 'October', value: 200},
                  {name: 'November', value: 278}, {name: 'December', value: 189}];


router.get('/visitor-count', async (ctx, next) => {
  ctx.body = data;
});

router.get('/sessions', async (ctx, next) => {
  ctx.body = dataPie
})

router.get('/weekday-weekend', async (ctx, next) => {
  ctx.body = data;
})

router.get('/average-visitor', async (ctx, next) => {
  ctx.body = data;
})

router.get('/average-session-duration', async (ctx, next) => {
  ctx.body = data;
})


module.exports = router
