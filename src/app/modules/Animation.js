import createReducer from '../utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const TURN_OFF_ANIMATION = 'TURN_OFF_ANIMATION'

// ------------------------------------
// Actions
// ------------------------------------

export const turnOffAnimation = () => ({
  type: TURN_OFF_ANIMATION,
})

// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    animation: true
}

export default createReducer(initialState, {
  [TURN_OFF_ANIMATION]: () => ({animation: false}),
})
