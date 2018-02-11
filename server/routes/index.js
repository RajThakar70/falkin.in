const router = require('koa-router')()

router.get('/visitor-count', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

router.get('/sessions', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('weekday-weekend', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('average-visitor', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
