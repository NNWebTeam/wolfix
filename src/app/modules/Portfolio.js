import createReducer from '../utils/createReducer'

import image1 from '../assets/photos/portfolio/politechnika/1.png'
import image2 from '../assets/photos/portfolio/politechnika/2.png'
import image3 from '../assets/photos/portfolio/politechnika/3.png'

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
    portfolio: [
        {
            name: 'Fotel Bolidu',
            desc: 'Wydrukowane na drukarkach WOLFino kopyto fotela bolidu posłużyło do stworzenia właściwego modelu z poliwęglanu. Druk 3D daje wyjątkowe możliwości tworzenia indywidualnych projektów. Wygodnej jazdy PRz Racing Team / Formuła Student Politechniki Rzeszowskiej!',
            img: image1
        },
        {
            name: 'Fotel Bolidu',
            desc: "Wydrukowane na drukarkach WOLFino kopyto fotela bolidu posłużyło do stworzenia właściwego modelu z poliwęglanu. Druk 3D daje wyjątkowe możliwości tworzenia indywidualnych projektów. Wygodnej jazdy PRz Racing Team / Formuła Student Politechniki Rzeszowskiej!",
            img: image2
        },
        {
            name: 'Fotel Bolidu',
            desc: "Wydrukowane na drukarkach WOLFino kopyto fotela bolidu posłużyło do stworzenia właściwego modelu z poliwęglanu. Druk 3D daje wyjątkowe możliwości tworzenia indywidualnych projektów. Wygodnej jazdy PRz Racing Team / Formuła Student Politechniki Rzeszowskiej!",
            img: image3
        }
    ]
}

export default createReducer(initialState, {})
