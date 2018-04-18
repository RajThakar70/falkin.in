const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const index = require('./routes/index')

const app = express()

app.use(errorhandler())

mongoose.Promise = global.Promise
try{
  mongoose.connect('mongodb://master:d2Oanlu1rleB@ds237475.mlab.com:37475/counter?poolSize=10&retries=5')
} catch(err) {
  console.log(err)
}

app.use(morgan('combined'))

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(session({
  secret: 'falkin-dev',
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 300000 },
  store: new MongoStore({
    host: '127.0.0.1',
    port: '27017',
    db: 'session',
    url: 'mongodb://master:d2Oanlu1rleB@ds237475.mlab.com:37475/counter'
  })
 }))
app.use(passport.initialize())
app.use(passport.session())
require('./auth')

app.use('/', index)


// development error handler -- will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    console.log(err)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler -- no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app

//
// const Koa = require('koa')
// const CSRF = require('koa-csrf')
//
// const app = new Koa()
//
// //Error handler
// const onerror = require('koa-onerror')
// onerror(app)
//
// app.proxy = true
//
// //MongoDB connection
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
// try{
//   mongoose.connect('mongodb://master:d2Oanlu1rleB@ds237475.mlab.com:37475/counter?poolSize=10&retries=5')
// } catch(err) {
//   console.log(err)
// }
//
// // Sessions
// const convert = require('koa-convert')
// const session = require('koa-generic-session')
// const MongoStore = require('koa-generic-session-mongo')
// app.keys = ['falkin-people-counter']
// app.use(convert(session({
//   store: new MongoStore()
// })))
//
// //body parser
// const bodyparser = require('koa-bodyparser')
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))
//
// // CSRF
// // app.use(new CSRF({
// //   invalidSessionSecretMessage: 'Invalid session secret',
// //   invalidSessionSecretStatusCode: 403,
// //   invalidTokenMessage: 'Invalid CSRF token',
// //   invalidTokenStatusCode: 403
// // }))
//
// //Routes
// const users = require('./routes/users')
// const index = require('./routes/index')
//
// // middlewares - bodyparser
// const json = require('koa-json')
// app.use(json())
//
// //logger
// const logger = require('koa-logger')
//
// app.use(logger())
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })
//
// //To serve static files
// app.use(require('koa-static')(__dirname + '/public'))
//
// //Views
// const views = require('koa-views')
// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))
//
// // routes
// app.use(users.routes(), users.allowedMethods())
// // app.use(index.routes(), index.allowedMethods(), index.prefix('/index'))
// app.use(index.routes(), index.allowedMethods())
//
// const send = require('koa-send')
// app.use(async (ctx) => {
//   await send(ctx, 'index.html', { root: __dirname + '/public' });
// })
//
// //Authentication
// require('./auth')
// const passport = require('koa-passport')
// app.use(passport.initialize())
// app.use(passport.session())
//
// const route = require('koa-route')
//
// app.use(route.post('/custom', function(ctx, next) {
//   return passport.authenticate('local', function(user, info, status) {
//     if (user === false) {
//       ctx.status = 401
//       ctx.body = { success: false }
//     } else {
//       ctx.body = { success: true }
//       return ctx.login(user)
//     }
//   })(ctx, next)
// }))
//
// app.use(route.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/api/dash-board',
//     failureRedirect: '/api/login'
//   })
// ))
//
// app.use(route.get('/logout', (ctx) => {
//   ctx.logout()
//   ctx.redirect('/')
// }))
//
//
// app.use(route.get('/api/login', (ctx) => {
//   console.log('login');
//   ctx.redirect('/login')
// }))
//
// app.use((ctx, next) => {
//   if(ctx.isAuthenticated()) {
//     return next()
//   } else {
//     ctx.redirect('/')
//   }
// })
//
// app.use(route.get('/api/dash-board', (ctx) => {
//   console.log('dash')
//   ctx.redirect('/dash-board')
// }))
//
// app.use((ctx, next) => {
//   return next().catch(function (err) {
//     ctx.status = err.status || 500;
//     if (err.expose) {
//       ctx.body = err.message;
//     }
//   })
// })
