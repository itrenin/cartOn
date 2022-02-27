import { createStore, combineReducers , applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { reducer } from './reducers/reducer'

const rootReducer = combineReducers({
  items: reducer,
})

// export default createStore(rootReducer, applyMiddleware(thunk))
export default createStore(rootReducer)
