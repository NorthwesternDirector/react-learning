import React from 'react'
import CmItem from './CmtItem'

export default class CmList extends React.Component{
  constructor(){
    super()
    this.state = {
      CommentList:[
        {id:1, user:'dt', content:'1dt'},
        {id:2, user:'fs', content:'2dt'},
        {id:3, user:'mm', content:'3dt'},
        {id:4, user:'ss', content:'4dt'},
      ]
    }
  }
  render(){
    return <div>
      <h1 style={{ color:'red',fontWeight:200,textAlign:'center' }}>评论组件</h1>
      <ul>
        {this.state.CommentList.map(item => <CmItem {...item} key={item.id}></CmItem> )}
      </ul>
      </div>
  }
}