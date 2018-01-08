import { combineReducers } from 'redux'
import example from './exampleReducer'
import { routerReducer as router } from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({
  example,
  router
})

export default rootReducer
