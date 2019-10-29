const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成的index页面
 
// 创建一个插件实例
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename : 'index.html'
})

// 向外暴露一个打包的配置对象
module.exports = {
  mode : 'development', // 在webpack 4.x 中，默认的打包入口是 src/index.js
  plugins:[
    htmlPlugin
  ],
  module: {
    rules: [
      {test : /\.js|jsx$/, use:'babel-loader', exclude: /node_modules/},
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.json']
  }
}