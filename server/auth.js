const passport = require('koa-passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

const User =  mongoose.model('User', mongoose.Schema({}, { strict: false }))

passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
  console.log(User.findById(id, done));
  User.findById(id, done);
})

passport.use(new LocalStrategy(function(username, password, done) {
  console.log(User.findById(id, done));
  User.findOne({ username: username, password: password }, done);
}))

// passport.deserializeUser( async (id, done) => {
//   done(null, user)
//
//   // return User.findById(id, done)
//
//   // .then((user) => { done(null, user) })
//   // .catch((err) => { done(err, null) })
//
//   // try {
//   //     // Band.findOne({name: "Guns N' Roses"}).exec()
//   //     //   .then((doc) => {
//   //     //
//   //     //   })
//   //   User.findById(id, done)
//   //     .then(doc => {
//   //       console.log('de-serialized user: ', id)
//   //     })
//   // } catch(err) {
//   //   done(err)
//   // }
// })

// passport.use(new LocalStretegy( (username, password, done) => {
//   co(function*() {
//     try {
//       var user = yield getUser(username)
//       console.log('user ', user);
//       console.log('username ', username);
//       if (user.username === username && user.password === password) {
//         return user
//       } else {
//         return null
//       }
//     } catch(e) {
//       return null
//     }
//   }).then((user) => {
//     done(null, user)
//   })
//   User.findOne({ username: username, password: password }, done)
//     .then((user) => {
//       console.log(user);
//       if(!user) return null
//       else return user
//       return done(null, user)
//     })
//     // .catch((err) => { done(err, null) })
//
//   // console.log(username)
//   // try {
//   //   User.findOne({ username: username, password: password }, done)
//   //     .then(doc => {
//   //       console.log('using local startegy. ', username, password);
//   //       console.log(doc);
//   //     })
//   // } catch(err) {
//   //   done(err)
//   // }
// }))

// module.exports = passport