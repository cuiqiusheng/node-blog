const Router = require('koa-router')
const router = new Router()

// 登录路由
router.get('/', async (ctx) => {
  await ctx.render('login')
})

router.get('/login', async (ctx) => {
  await ctx.render('login')
})

// 提交登录
router.post('/login', async (ctx) => {
  try {
    const body = ctx.request.body
    if (body.userName === 'admin' && body.password === '1qaz@WSX') {
      ctx.response.redirect('index')
    } else {
      ctx.body = `error: 用户名密码错误`
    }
  } catch(e) {
    ctx.body = `error: ${e}`
  }
})

// 主页
router.get('/index', async (ctx) => {
  await ctx.render('index')
})

// 日志
router.get('/log', async (ctx) => {
  await ctx.render('log')
})

// 说说
router.get('/onenote', async (ctx) => {
  await ctx.render('onenote')
})

// 留言板
router.get('/msgboard', async (ctx) => {
  await ctx.render('msgboard')
})

module.exports = router
