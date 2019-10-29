import React from 'react'

function Hello(props){
  console.log(props)
  return <h1>haha+{props.name}</h1>
}

export default Hello