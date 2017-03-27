import createReducer from '../utils/createReducer'

import image1 from '../assets/photos/Projektowanie/1.png'

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
