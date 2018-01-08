const defaultState = [
  'Hello world'
]

function example (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_PHRASE' :
      return [ ...state, action.phrase ]
    default:
      return state
  }
}

export default example
