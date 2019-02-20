let user = require('../models/Admin/user')
let Admin = require('../models/Admin/admin')
const moment = require('moment')
module.exports = {
    home: async(ctx,next) => {
        await user.findAll(function(err,Users) {
            if(err) {
                console.log(err)
            }
            ctx.render('admin/home',{
                Users: Users,
                moment: moment
            })
        })
    },
    sign_in: async(ctx,next) => {
       await ctx.render('admin/sign_in')
    },
    postSign_in: async (ctx,next) => {
        let name = ctx.request.body.name
        let password = ctx.request.body.password
        await Admin.findByName(name,function(err,admin) {
            if(admin === null) {
            return ctx.body = {'msg':'用户名不存在','status':'2'}
            }
            else {
                admin.comparePassword(password,function(err,isMatch) {
                    if(err){
                        console.log(err)
                    }
                    if(isMatch) {
                        ctx.session.admin = admin
                        return ctx.body = {'msg':'登录成功','status':'1'}
                    }
                    else {
                        return ctx.body = {'msg':'密码错误','status':'3'}
                    }
                })
            }
        })	
    },
    deletUser: async(ctx,next) => {
        let id = ctx.request.body.id
        await user.deletById(id,function(err,users){
            if(err){
                console.log(err)
            }
            ctx.redirect('/admin')
        })
    },
    signRequired: async(ctx,next) => {
        let admin = ctx.session.admin
        if(!admin){
            ctx.redirect('/admin/sign_in')
        }
        await next()
    }
}