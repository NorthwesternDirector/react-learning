import React from 'react'

export default class Moive extends React.Component{
  constructor(props){
    super(props)
    this.state={
      routeParams:props.match.params
    }
  }

  render(){
    return <div>
    movie---{this.state.routeParams.type}----{this.state.routeParams.id}
  </div>
  }
}