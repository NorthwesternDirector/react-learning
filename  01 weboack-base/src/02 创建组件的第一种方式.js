import React from 'react'
import ReactDOM from 'react-dom'


function Hello(props){
  console.log(props)
  return <h1>haha+{props.name}</h1>
}

const dog = {
  name: "xx",
  age: 18,
  sex: "man"
}

ReactDOM.render(<div>
  123
  {/* <Hello name={dog.name} age={dog.age} sex="dog.sex"></Hello> */}
  <Hello {...dog}></Hello>

</div>,document.querySelector('#app'))