import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import {reducer as modal} from 'redux-modal'
import user from './User'
import animation from './Animation'
import hexes from './Hexes'
import news from './News'
import projects from './Projects'
import portfolio from './Portfolio'
import projektowanie from './Projektowanie'

export default combineReducers({
  form,
  modal,
  user,
  animation,
  hexes,
  news,
  projects,
  portfolio,
  projektowanie
})
