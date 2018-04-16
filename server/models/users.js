const mongoose = require('mongoose')

const Users =  mongoose.model('User', mongoose.Schema({}, { strict: false }))

module.exports = Users
