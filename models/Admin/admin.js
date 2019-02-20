const mongoose = require('mongoose')
const adminSchema = require('../../schemas/Admin/admin')
const admin = mongoose.model('adminUser',adminSchema)

module.exports = admin