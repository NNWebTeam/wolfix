import createReducer from '../utils/createReducer'

import image1 from '../assets/wolf3d/projektowanie/Projektowanie.png'

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    projektowanie: [
        {
            img: image1
        }
    ]
}

export default createReducer(initialState, {})
