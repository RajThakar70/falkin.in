const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const Users = require('../models/users')
const Counter = require('../models/counter')

router.post('/login', passport.authenticate('local'), (req, res) => {
  // console.log(req);
  // console.log(JSON.stringify(passport));
  res.send('logged in')
})

router.post('/api/contact', (req, res) => {
  contact(req.body.data)
})

router.post('/api/devices', (req, res) => {
  Users.find({username: "adityapsvs"}, 'devices', (err, devices) => {
    console.log('Devices are: ', devices);
    if(err)
      res.json({ err })
    else
      res.json({ devices })
  })
})

router.post('/api/data', (req, res) => {
  Counter.find({username: "adityapsvs", device: "device3"}, 'in out time', (err, data) => {
    console.log('Gathered data: ', data);
    if(err)
      res.json({ err })
    else
      res.json({ data })
  })
})

module.exports = router


// const router = require('koa-router')()
// const passport = require('koa-passport')
// const mongoose = require('mongoose')
//
// const contact = require('../controllers/contactForm')
//
// const Counter = mongoose.model('Counter', mongoose.Schema({}, { strict: false }))
// const Users = mongoose.model('User', mongoose.Schema({}, { strict: false }))
//
// // router.post('/custom', (ctx, next) => {
// //   console.log(ctx);
// //   return passport.authenticate('local', function(user, info, status) {
// //     if (user === false) {
// //       ctx.throw(401)
// //       ctx.body = { success: false }
// //     } else {
// //       ctx.body = { success: true }
// //       return ctx.login(user)
// //     }
// //   })(ctx, next)
// // })
// //
// // router.post('/login', (ctx) => {
// //   passport.authenticate('local', {
// //     successRedirect: '/index/api/dash-board',
// //     failureRedirect: '/index/api/login'
// //   })
// // })
// //
// // router.get('/logout', (ctx) => {
// //   ctx.logout()
// //   ctx.redirect('/')
// // })
// //
// // router.get('/api/dash-board', (ctx) => {
// //   console.log('dash')
// //   ctx.redirect('/dash-board')
// // })
// //
// // router.get('/api/login', (ctx) => {
// //   console.log('login');
// //   ctx.redirect('/login')
// // })
//
// // router.post('/login', async (ctx) => {
// //   return passport.authenticate('local', (err, user, info, status) => {
// //     // console.log(user);
// //     if(user) {
// //       ctx.login(user)
// //       ctx.redirect('/dash-board')
// //     } else {
// //       ctx.status = 400
// //       ctx.body = {status: 'error'}
// //     }
// //   })(ctx)
// //   // console.log("ctx body",ctx.request);
// //   // passport.authenticate('local', {
// //   //   successRedirect: '/dash-board',
// //   //   failureRedirect: '/login'
// //   // })
// //   // ctx.body = {abc:'def'}
// // })
//
// // router.get('/logout', async (ctx) => {
// //   if(ctx.isAuthenticated()) {
// //     ctx.logout()
// //     ctx.redirect('/')
// //   } else {
// //     ctx.body = { success: false }
// //     ctx.throw(401)
// //   }
// // })
//
//
//
// module.exports = router
