// 假设 main.js 还是入口函数
// console.log('good!!!')

import React from 'react'
import ReactDOM from 'react-dom'

// const myh1 = React.createElement('h1',{id:'myh1'},'这是一个H1')
// const mydiv = React.createElement('div',null,'这是一个div',myh1)

//在js页面中混合写入类似HTML的语法，叫做JSX语法，符合XML规范的JS
const mydiv=<div id="htmlDIV"> 这是一个HTMLdiv <h1>hahaha</h1> </div>

ReactDOM.render(mydiv,document.querySelector('#app'))