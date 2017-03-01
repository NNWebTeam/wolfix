import {combineReducers} from 'redux'
import User from './User'
import {reducer as formReducer} from 'redux-form'
import Animation from './Animation'
export default combineReducers({
  currentUser: User,
  animation: Animation,
  form: formReducer
})
