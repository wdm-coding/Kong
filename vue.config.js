module.exports = {
    lintOnSave: false,//关闭检测
    devServer:{
        open:true, //浏览器自动开启
        port:8820,//端口号
        host:"localhost",//主机地址
        hotOnly:true,//热更新
        //此处配置代理 
        proxy: {
            '/api': {
                target: 'http://apis.map.qq.com', //访问地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
          alias:{
            // "别名":"对应的文件夹"
            "com":"@/components",
            "api":"@/api",
            "util":"@/util",
            "stores":"@/stores",
            "assets":"@/assets",
            "routers":"@/routers",
            "views":"@/views"
          }
        }
      }
}