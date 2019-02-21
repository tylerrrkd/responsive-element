const path = require('path')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'./'
// 如果您的静态文件部署在cdn中
// 例如：https://www.cdn.xxx.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
  ? './'
  : './'

module.exports = {
  // 将element px转换为rem
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 100, // 基数请与 public/index.html 中的rem2px保持一致
            propList: ['*']
          })
        ]
      }
    }
  },
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: BASE_URL,
  assetsDir: 'static', // 静态文件目录
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//
  ],
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  // }
}