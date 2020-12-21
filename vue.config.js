module.exports = {
  //lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        // target:'https://www.imooc.com',
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',//这个选项指定这个子路径
  // outputDir: 'dest',//整个项目打包输出的路径
  // indexPath:'haha.html',//根路经输出的单页面一个html文件名字
  lintOnSave:true,//eslint校验 默认禁用 true开启可用来错误在开发时直接显示在浏览器中
  productionSourceMap:true,//生产环境的 source map不需要时用false，需要时用true,重新打包构建后,可以查看dist文件夹-》js文件夹里出现source map文件,
//source map文件是本地代码浏览器中的控制台source里用来断点的文件,如果一切打包上传线上服务器,访问到我们的代码,不安全..而且使打包变慢.
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');//干掉所有的prefetch
  }
}