const Koa = require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const bodyparser = require('koa-bodyparser')

const route = require('./route')

// bodyparser
app.use(bodyparser())

// 配置静态资源
app.use(static(path.join(__dirname, '../static')))

// 配置模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// 加载路由
app.use(route.routes(), route.allowedMethods())

// 启动服务，监听5090端口
app.listen(5090, () => {
  console.log('app is running at port 5090')
})
