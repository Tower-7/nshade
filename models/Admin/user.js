const mongoose = require('mongoose')
const userSchema = require('../../schemas/Admin/user')
const user = mongoose.model('user',userSchema)

module.exports = user