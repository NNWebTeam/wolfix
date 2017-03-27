import FireBaseTools from '../utils/firebase'
import createReducer from '../utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const FETCH_NEWS = 'FETCH_NEWS'
export const ADD_NEWS = 'ADD_NEWS'
export const SET_NEWS = 'SET_NEWS'
export const DELETE_NEWS = 'DELETE_NEWS'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchNews = () => ({
    type: FETCH_NEWS,
    payload: FireBaseTools.getDatabaseReference('/news').once('value').then(e => e.val())
})

export const addNews = news => ({
    type: ADD_NEWS,
    payload: FireBaseTools.getDatabaseReference(`/news`).push().set(news)
})

export const deleteNews = nid => ({
    type: DELETE_NEWS,
    payload: FireBaseTools.getDatabaseReference(`/news/${nid}`).set(null)
})


// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
  news: null
}

export default createReducer(initialState, {
  [FETCH_NEWS]: (state, {payload}) => ({news: payload})
})
