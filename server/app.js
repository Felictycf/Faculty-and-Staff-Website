const path = require('path');
const koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
// const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

// const initData = require('./controller/index');

const { koaBody } = require('koa-body');

// 实例化koa
const app = new koa();
const router = new Router();

app.use(cors({}));

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './upload';
// http://localhost:3001/main/index.html

// 加载解析post的body数据中的中间件
//开启文件上传功能
app.use(
  koaBody({
    multipart: true, //支持图片文件
    formidable: {
      uploadDir: path.join(__dirname, './upload'), //设置上传目录
      keepExtensions: true, //保留拓展名
    },
  }),
);


// 引入users.js
const users = require('./routes/api/users');
// const papers = require('./routes/api/papers');
// const common = require('./routes/api/common');
const Up = require('./controller/upload');

// 路由
router.get('/', async (ctx) => {
  ctx.body = { msg: 'Hello Koa Interfaces' };
});

router.post('/api/upLoad/file', Up.upLoadImg);

mongoose
    .connect('mongodb://cg:lianshi@47.113.221.19:27017/teacher-system?authSource=teacher-system', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected...');
    })
    .catch((err) => {
        console.error('MongoDB Connection Error:', err);
    });
// 配置路由地址 localhost:5000/api/users
router.use('/api/users', users);
// router.use('/api/papers', papers);
// router.use('/api/common', common);

// Configure routes
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server started on ${port}, open http://localhost:${port}/index.html`);
});
module.exports = app;
