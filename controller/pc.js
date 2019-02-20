const User = require('../models/Admin/user')
module.exports = {
    home: async(ctx,next) => {
        await ctx.render('pc/home',{
            title:'NSHADES'
        })
    },
    connect: async(ctx,next) => {
        await ctx.render('pc/connect',{
            title: 'Connect'
        })
    },
    process: async(ctx,next) => {
        await ctx.render('pc/process',{
            title: 'Process'
        })
    },
    product: async(ctx,next) => {
        await ctx.render('pc/product',{
            title: 'Product'
        })
    },
    gallery: async(ctx,next) => {
        await ctx.render('pc/gallery',{
            title: 'Gallery'
        })
    },
    about: async(ctx,next) => {
        await ctx.render('pc/about',{
            title: 'AboutUs'
        })
    },
    detail1: async(ctx,next) => {
        await ctx.render('pc/detail1',{
            title: 'detail'
        })
    },
    detail2: async(ctx,next) => {
        await ctx.render('pc/detail2',{
            title: 'detail'
        })
    },
    detail3: async(ctx,next) => {
        await ctx.render('pc/detail3',{
            title: 'detail'
        })
    },
    detail4: async(ctx,next) => {
        await ctx.render('pc/detail4',{
            title: 'detail'
        })
    },
    detail5: async(ctx,next) => {
        await ctx.render('pc/detail5',{
            title: 'detail'
        })
    },
    detail6: async(ctx,next) => {
        await ctx.render('pc/detail6',{
            title: 'detail'
        })
    },
    email: async(ctx,next) => {
        let user = ctx.request.body
        let _email 
        _email = new User({
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            question: user.question,
            email: user.email,
            ip: user.ip
        })
        await _email.save(function(err,user) {
            if(err) {
                console.log(err)
            }
            return ctx.body = {}
        })
    },
    login: async(ctx,next) => {
        await ctx.render('pc/login',{
            btnName:'click me'
        })
    }
}