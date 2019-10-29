// import React,{Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from '@/components/Hello'

// import '@/02 class继承公共方法'


class Movie extends React.Component{

  constructor(){
    super()
    this.state= {
      msg: "Movie-constructor-state"
    }
  }
  render(){
    return <div> <h1>哈哈😄</h1><h2>{this.props.name}</h2><h2>{this.state.msg}</h2></div>
   
  }
}

const user = {
  name: 'dt',
  age: 18,
  gender: 'man'
}

ReactDOM.render(<div>
  123
  {/* <Hello {...user}></Hello> */}
  <Movie {...user}></Movie> 
 </div>,document.querySelector('#app'))