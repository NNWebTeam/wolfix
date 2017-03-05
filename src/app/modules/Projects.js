import createReducer from '../utils/createReducer'

import image1 from '../assets/photos/filamentyPLA/filament (1).jpg'
import image2 from '../assets/photos/filamentyPLA/filament (2).jpg'
import image3 from '../assets/photos/filamentyPLA/filament (3).jpg'
import image4 from '../assets/photos/filamentyPLA/filament (4).jpg'
import image5 from '../assets/photos/filamentyPLA/filament (5).jpg'
import image6 from '../assets/photos/filamentyPLA/filament (6).jpg'
import image7 from '../assets/photos/filamentyPLA/filament (7).jpg'
import image8 from '../assets/photos/filamentyPLA/filament (8).jpg'
import image9 from '../assets/photos/filamentyPLA/filament (9).jpg'
import image10 from '../assets/photos/filamentyPLA/filament (10).jpg'
import image11 from '../assets/photos/filamentyPLA/filament (11).jpg'
import image12 from '../assets/photos/filamentyPLA/filament (12).jpg'

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

// export const fetchProjects = () => ({
//   type
// })

// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    projects: {
        1: {
            name: 'Projekt 1',
            desc: 'opis projektu nr 1',
            imgs: [
                image1,
                image2,
                image3
            ]
        },
        2: {
            name: 'Projekt 2',
            desc: 'opis projektu nr 2',
            imgs: [
                image4,
                image5,
                image6
            ]
        },
        3: {
            name: 'Projekt 3',
            desc: 'opis projektu nr 3',
            imgs: [
                image7,
                image8,
                image9
            ]
        },
        4: {
            name: 'Projekt 4',
            desc: 'opis projektu nr 4',
            imgs: [
                image10,
                image11,
                image12
            ]
        }
    }
}

export default createReducer(initialState, {})
