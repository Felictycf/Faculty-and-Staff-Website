const mongoose = require('mongoose');

// 数据库的连接状态 mongoose.connect('mongodb://数据库ip地址 : 端口号( 默认端口**27017**可以省略 )/数据库名')
mongoose
  .connect('mongodb://127.0.0.1:27017/teacher-system', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb Connectd...');
  })
  .catch((err) => {
    console.log(err);
  });
