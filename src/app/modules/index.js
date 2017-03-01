import {combineReducers} from 'redux'
import User from './User'
import {reducer as formReducer} from 'redux-form'
import Animation from './Animation'
import Hexes from './Hexes'
export default combineReducers({
  currentUser: User,
  animation: Animation,
  form: formReducer,
  hexes: Hexes
})
