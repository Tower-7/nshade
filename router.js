const Router = require('koa-router')
const pc = require('./controller/pc')
const admin = require('./controller/admin')
const router = new Router()
module.exports = (app) => {
    //主页	
	router.get('/',pc.home)
	router.get('/connect',pc.connect)
	router.get('/gallery',pc.gallery)
	router.get('/about',pc.about)
	router.get('/process',pc.process)
	router.get('/product',pc.product)
    router.post('/email',pc.email)
    
    //詳情頁
	router.get('/detail1',pc.detail1)
	router.get('/detail2',pc.detail2)
	router.get('/detail3',pc.detail3)
	router.get('/detail4',pc.detail4)
	router.get('/detail5',pc.detail5)
	router.get('/detail6',pc.detail6)

	// //后台管理页面
	router.get('/admin',admin.signRequired,admin.home)
	router.get('/admin/sign_in',admin.sign_in)
	// router.post('/admin/sign_in',Admin.sign_up)
	router.post('/admin/sign_in',admin.postSign_in)
	router.post('/admin/user/delete',admin.deletUser)
    // router.get('/admin/logout',Admin.logout)
    
    app.use(router.routes()).use(router.allowedMethods())
}
