import FireBaseTools from '../utils/firebase'
import createReducer from '../utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const FETCH_NEWS = 'FETCH_NEWS'
export const ADD_NEWS = 'ADD_NEWS'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchNews = () => ({
  type: FETCH_NEWS,
  payload: FireBaseTools.getDatabaseReference('/news').once('value').then(e => e.val())
})

export const addNews = news => ({
  type: ADD_NEWS,
  payload: FireBaseTools.getDatabaseReference(`/news/${news.id}`).set(news)
})

// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    news: []
}

export default createReducer(initialState, {
  [FETCH_NEWS]: (state, {news}) => ({news}),
  [ADD_NEWS]: (state, {news}) => ({...news.add(news)})
})
