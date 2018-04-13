const Koa = require('koa')
const CSRF = require('koa-csrf')

const app = new Koa()

//Error handler
const onerror = require('koa-onerror')
onerror(app)

app.proxy = true

//MongoDB connection
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
try{
  mongoose.connect('mongodb://master:d2Oanlu1rleB@ds237475.mlab.com:37475/counter?poolSize=10&retries=5')
} catch(err) {
  console.log(err)
}

// Sessions
const convert = require('koa-convert')
const session = require('koa-generic-session')
const MongoStore = require('koa-generic-session-mongo')
app.keys = ['falkin-people-counter']
app.use(convert(session({
  store: new MongoStore()
})))

//body parser
const bodyparser = require('koa-bodyparser')
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

// CSRF
// app.use(new CSRF({
//   invalidSessionSecretMessage: 'Invalid session secret',
//   invalidSessionSecretStatusCode: 403,
//   invalidTokenMessage: 'Invalid CSRF token',
//   invalidTokenStatusCode: 403
// }))

//Routes
const users = require('./routes/users')
const index = require('./routes/index')

// middlewares - bodyparser
const json = require('koa-json')
app.use(json())

//logger
const logger = require('koa-logger')

app.use(logger())
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//To serve static files
app.use(require('koa-static')(__dirname + '/public'))

//Views
const views = require('koa-views')
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// routes
app.use(users.routes(), users.allowedMethods())
// app.use(index.routes(), index.allowedMethods(), index.prefix('/index'))
app.use(index.routes(), index.allowedMethods())

const send = require('koa-send')
app.use(async (ctx) => {
  await send(ctx, 'index.html', { root: __dirname + '/public' });
})

//Authentication
require('./auth')
const passport = require('koa-passport')
app.use(passport.initialize())
app.use(passport.session())

const route = require('koa-route')

app.use(route.post('/custom', function(ctx, next) {
  return passport.authenticate('local', function(user, info, status) {
    if (user === false) {
      ctx.status = 401
      ctx.body = { success: false }
    } else {
      ctx.body = { success: true }
      return ctx.login(user)
    }
  })(ctx, next)
}))

app.use(route.post('/login',
  passport.authenticate('local', {
    successRedirect: '/api/dash-board',
    failureRedirect: '/api/login'
  })
))

app.use(route.get('/logout', (ctx) => {
  ctx.logout()
  ctx.redirect('/')
}))


app.use(route.get('/api/login', (ctx) => {
  console.log('login');
  ctx.redirect('/login')
}))

app.use((ctx, next) => {
  if(ctx.isAuthenticated()) {
    return next()
  } else {
    ctx.redirect('/')
  }
})

app.use(route.get('/api/dash-board', (ctx) => {
  console.log('dash')
  ctx.redirect('/dash-board')
}))

app.use((ctx, next) => {
  return next().catch(function (err) {
    ctx.status = err.status || 500;
    if (err.expose) {
      ctx.body = err.message;
    }
  })
})

module.exports = app
