import FireBaseTools from '../utils/firebase'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const EDIT_EVENT = 'EDIT_EVENT'

export const fetchEvents = () => ({
  type: FETCH_EVENTS,
  payload: FireBaseTools.getDatabaseReference('/events').once('value').then(e => e.val())
})

export const editEvent = event => ({
  type: EDIT_EVENT,
  payload: FireBaseTools.getDatabaseReference(`/events/${event.eventId}`).set(event)
})