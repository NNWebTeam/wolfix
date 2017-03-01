import createReducer from '../utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const HIDE_HEXES = 'HIDE_HEXES'

// ------------------------------------
// Actions
// ------------------------------------

export const hideHexes = () => ({
  type: HIDE_HEXES,
})

// export const showHexes = () => ({
//   type: HIDE_HEXES,
// })
// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    hexes: true
}

export default createReducer(initialState, {
  [HIDE_HEXES]: () => ({hexes: false}),
})
