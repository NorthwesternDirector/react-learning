import React from 'react'
import CmItem from '@/components/CmtItem2'

import cssobj from '@/css/cmtList.scss'
console.log(cssobj)
import bootcss from 'bootstrap/dist/css/bootstrap.css'
console.log(bootcss)

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
      <h1 className={ cssobj.title}>评论组件</h1>

        {/* <button className={ [bootcss.btn, bootcss['btn-primary']].join(' ')  }>add</button> */}
        <button className="btn btn-primary">add</button>
        {this.state.CommentList.map(item => <CmItem {...item} key={item.id}></CmItem> )}
   

      </div>
  }
}