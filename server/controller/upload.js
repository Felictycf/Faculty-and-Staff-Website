const fs = require('fs');
const path = require('path');

class UpLoad {
  static async upLoadImg(ctx) {
    const file = ctx.request.files.file; //ctx.request.files.file中的file需要与前端使用的名称保持一致

    console.log('upLoadImg', file);

    const basename = path.basename(file.filepath); //传入绝对路径返回的basename为文件名称+拓展名

    ctx.status = 200;

    ctx.body = {
      url: `${ctx.origin}/${basename}`, //ctx.origin为http://localhost:3000
      relativeUrl: `/${basename}`,
      name: file.originalFilename,
    };

    // const file = ctx.request.files.file; //前端传过来的文件img参数

    // console.log("upLoadImg", file);

    // const readStream = fs.createReadStream(file.path); //读取文件
    // const cdn = path.resolve(__dirname, '../views/upload'); //设置存放文件路径

    // const name = `/${Date.now()}-${file.name}`;

    // console.log("cdn + name", cdn + name);

    // const writeStream = fs.createWriteStream(cdn + name); //写文件

    // await readStream.pipe(writeStream);
    // // 把写入成功的CDN图片的访问路径返回前端
    // ctx.body = {
    //   err: 0,
    //   msg: 'success',
    //   data: {
    //     fileInfo: '/cdn' + name,
    //   },
    // };
  }
}

module.exports = UpLoad;
