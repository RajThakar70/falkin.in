const mongoose = require('mongoose')

const Counter =  mongoose.model('Counter', mongoose.Schema({}, { strict: false }))

module.exports = Counter
