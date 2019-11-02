const defaultState = {
  inputValue: 'wow',
  list: []
}

export default (state=defaultState, action)=>{
  if(action.type=== 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  console.log(state, action)
  return state
} 