const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const router = require('koa-simple-router')
const send = require('koa-send')
// const session = require('koa-session')
// const passport = require('koa-passport')
// Sessions
// app.keys = ['falkin-people-counter']
// app.use(session({}, app))
//
// app.use(passport.initialize())
// app.use(passport.session())

const contact = require('./controllers/contactForm')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// app.use(async ctx => {
//   // the parsed body will store in ctx.request.body
//   // if nothing was parsed, body will be an empty object {}
//   ctx.body = ctx.request.body;
//   console.log(ctx.body);
// });

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(router(_ => {
  _.post('/api/contact', async (ctx, next) => {
      contact(ctx, next)
  })
}))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
// app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

app.use(async (ctx) => {
  await send(ctx, 'index.html', { root: __dirname + '/public' });
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


module.exports = app
