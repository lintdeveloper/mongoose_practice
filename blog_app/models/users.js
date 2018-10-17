const mongoose = require('../db/mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String    
})

module.exports = mongoose.model('User', userSchema)

