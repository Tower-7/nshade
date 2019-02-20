const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	email: String,
	firstName: String,
	lastName: String,
	phone: String,
	question: String,
	ip: String,
	meta: {
		createAt: {
			type:Date,
			default:Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})
userSchema.pre('save',function(next) {
	if(this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	}
	else {
		this.meta.updateAt = Date.now()
	}

	next()
})
userSchema.statics = {
	findAll: function(cb) {
		return this
		.find({})
		.sort({'meta.createAt':-1})
		.exec(cb)
	}, 
	findById: function(id,cb) {
		return this
		.find({_id:id})
		.exec(cb)
	},
	deletById: function(id,cb) {
		return this
		.remove({_id:id})
		.exec(cb)
	}
}
module.exports = userSchema