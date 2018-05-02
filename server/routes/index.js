const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const Users = require('../models/users')
const Counter = require('../models/counter')

router.post('/login', passport.authenticate('local'), (req, res) => {
  // console.log(req.user);
  // console.log(JSON.stringify(passport));
  // const username = req.body.username
  // const password = req.body.password
  //
  // Users.findOne({ username: username, password: password }, (err, user) => {
  //   if(err) { return res.status(500).send() }
  //   if(!user) { return res.status(404).send() }
  //   console.log(req.session.user);
  //   req.session.user = user
  // })
  // return res.status(200).send()
  res.send('logged in')
})

router.get('/logout', (req, res) => {
  req.logout()
  res.send('logged out')
})

router.post('/api/contact', (req, res) => {
  contact(req.body.data)
})

router.get('/api/devices', (req, res) => {
  if(req.session.passport) {
    Users.findById(req.session.passport.user, 'username devices', (err, data) => {
      err ? res.json({ err }) : res.json({ data })
    })
  } else {
    res.status(401).send()
  }
})

router.get('/api/data', (req, res) => {
  console.log(req.query.username);
  var username = req.query.username
  if(req.session.passport) {
    Counter.find({username: username, device: req.query.device}, 'in out time', (err, data) => {
      if(err) {
        console.log(err);
        res.json({ err })
      }
      else {
        console.log(data);
        res.json({ data })
      }
    })
  } else {
    res.status(401).send()
  }
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
