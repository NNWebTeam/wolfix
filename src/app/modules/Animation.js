import createReducer from '../utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const TURN_OFF_ANIMATION = 'TURN_OFF_ANIMATION'
export const CHOOSE_HEX = 'CHOOSE_HEX'

// ------------------------------------
// Actions
// ------------------------------------

export const turnOffAnimation = () => ({
  type: TURN_OFF_ANIMATION,
})

export const insertHexToMainHex = text => ({
  type: CHOOSE_HEX,
  text
})

// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    animation: false,
    text: '',
    firstPartner: 'first partner'
}

export default createReducer(initialState, {
  [TURN_OFF_ANIMATION]: () => ({animation: false}),
  [CHOOSE_HEX]: (state, {text}) => ({text})
})
