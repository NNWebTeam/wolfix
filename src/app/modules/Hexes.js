import createReducer from '../utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const HIDE_HEXES = 'HIDE_HEXES'
export const SHOW_HEXES = 'SHOW_HEXES'
// ------------------------------------
// Actions
// ------------------------------------

export const hideHexes = () => ({
  type: HIDE_HEXES,
})

export const showHexes = () => ({
  type: SHOW_HEXES,
})
// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    hexes: false
}

export default createReducer(initialState, {
  [HIDE_HEXES]: () => ({hexes: false}),
  [SHOW_HEXES]: () => ({hexes: true}),
})
