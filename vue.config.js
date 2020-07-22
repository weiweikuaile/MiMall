module.exports = {
  lintOnSave: false,
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
  }
}