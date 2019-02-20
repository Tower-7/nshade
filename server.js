const Koa = require('koa')
const path = require('path')
const session = require('koa-session')
const bodyparser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const mongoose = require('mongoose')
const router = require('./router')
const app = new Koa()
app.use(bodyparser())
//连接数据库
mongoose.Promise = require('bluebird')
const dbUrl = 'mongodb://admin:xyzqq*859632@47.88.53.87:15015/admin'
//参数设置
const options = {
  useMongoClient: true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(dbUrl,options);

//配置session
app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));

app.use(staticFiles(path.resolve(__dirname,'./public')))
app.use(nunjucks({
  ext:'njk',
  path: path.join(__dirname,'views'), //指定视图目录
  nunjucksConfig: {
    trimBlocks: true //开启转义 防Xss
  }
}))
router(app)

app.listen(3500)