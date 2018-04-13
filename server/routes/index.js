const router = require('koa-router')()
const passport = require('koa-passport')
const mongoose = require('mongoose')

const contact = require('../controllers/contactForm')

const Counter = mongoose.model('Counter', mongoose.Schema({}, { strict: false }))
const Users = mongoose.model('User', mongoose.Schema({}, { strict: false }))

// router.post('/custom', (ctx, next) => {
//   console.log(ctx);
//   return passport.authenticate('local', function(user, info, status) {
//     if (user === false) {
//       ctx.throw(401)
//       ctx.body = { success: false }
//     } else {
//       ctx.body = { success: true }
//       return ctx.login(user)
//     }
//   })(ctx, next)
// })
//
// router.post('/login', (ctx) => {
//   passport.authenticate('local', {
//     successRedirect: '/index/api/dash-board',
//     failureRedirect: '/index/api/login'
//   })
// })
//
// router.get('/logout', (ctx) => {
//   ctx.logout()
//   ctx.redirect('/')
// })
//
// router.get('/api/dash-board', (ctx) => {
//   console.log('dash')
//   ctx.redirect('/dash-board')
// })
//
// router.get('/api/login', (ctx) => {
//   console.log('login');
//   ctx.redirect('/login')
// })

// router.post('/login', async (ctx) => {
//   return passport.authenticate('local', (err, user, info, status) => {
//     // console.log(user);
//     if(user) {
//       ctx.login(user)
//       ctx.redirect('/dash-board')
//     } else {
//       ctx.status = 400
//       ctx.body = {status: 'error'}
//     }
//   })(ctx)
//   // console.log("ctx body",ctx.request);
//   // passport.authenticate('local', {
//   //   successRedirect: '/dash-board',
//   //   failureRedirect: '/login'
//   // })
//   // ctx.body = {abc:'def'}
// })

// router.get('/logout', async (ctx) => {
//   if(ctx.isAuthenticated()) {
//     ctx.logout()
//     ctx.redirect('/')
//   } else {
//     ctx.body = { success: false }
//     ctx.throw(401)
//   }
// })

router.post('/api/contact', async (ctx, next) => {
  console.log(ctx.request.body);
  contact(ctx, next)
  ctx.body = {cool: 'okay'}
})

router.post('/api/devices', async (ctx) => {
  Users.find({username: ctx.request.header.name}, 'devices', (err, devices) => {
    console.log('Devices are: ', devices);
    ctx.body = devices
  })
})

router.post('/api/data', async (ctx) => {
  console.log(ctx);
  console.log(ctx.request.header.device);
  Counter.find({username: ctx.request.header.name, device: ctx.request.header.device}, 'in out time', (err, data) => {
    console.log('Gathered data: ', data);
    ctx.body = data
  })
})


module.exports = router
