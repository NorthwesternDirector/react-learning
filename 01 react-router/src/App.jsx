import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'

import Home from '../components/home'
import About from '../components/about'
import Moive from '../components/moive'

import store from './store/index'
 
import {DatePicker, Input, Button} from 'antd'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return <HashRouter><div>
    这是web APP
    <hr/>
    <DatePicker/>
    <hr/>
    <Input  style={{width:'300px',margin:'0px 10px'}} value={store.getState().inputValue} onChange={this.handleInputChange}></Input><Button type="danger">无情 </Button>
    <hr/>
    <Link to="/home">首页</Link>&nbsp;&nbsp;
    <Link to="/movie/top250/20">电影</Link>&nbsp;&nbsp;
    <Link to="/about">关于</Link>&nbsp;&nbsp;

    <hr/>
    <Route path="/home" component={Home}></Route>
    <Route path="/movie/:type/:id" component={Moive} exact></Route>
    <Route path="/about" component={About}></Route>
  </div>
  
  </HashRouter>
  }

  handleInputChange(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch()
  }
}