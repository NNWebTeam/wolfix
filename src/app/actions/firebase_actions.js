import FireBaseTools from '../utils/firebase'

export const REGISTER_FIREBASE_USER = 'REGISTER_FIREBASE_USER'
export const LOGIN_FIREBASE_USER = 'LOGIN_FIREBASE_USER'
export const FETCH_FIREBASE_USER = 'FETCH_FIREBASE_USER'
export const UPDATE_FIREBASE_USER = 'UPDATE_FIREBASE_USER'
export const CHANGE_FIREBASE_USER_PASSWORD = 'CHANGE_FIREBASE_USER_PASSWORD'
export const FIREBASE_PASSWORD_RESET_EMAIL = 'FIREBASE_PASSWORD_RESET_EMAIL'
export const LOGOUT_FIREBASE_USER = 'LOGOUT_FIREBASE_USER'

export const registerUser = user => ({
  type: REGISTER_FIREBASE_USER,
  payload: FireBaseTools.registerUser(user)
})

export const loginUser = user => ({
  type: LOGIN_FIREBASE_USER,
  payload: FireBaseTools.loginUser(user)
})

export const fetchUser = () => ({
  type: FETCH_FIREBASE_USER,
  payload: FireBaseTools.fetchUser()
})

export const updateUser = user => ({
  type: UPDATE_FIREBASE_USER,
  payload: FireBaseTools.updateUserProfile(user)
})

export const changePassword = newPassword => ({
  type: CHANGE_FIREBASE_USER_PASSWORD,
  payload: FireBaseTools.changePassword(newPassword)
})

export const resetPasswordEmail = email => ({
  type: FIREBASE_PASSWORD_RESET_EMAIL,
  payload: FireBaseTools.resetPasswordEmail(email)
})

export const logoutUser = user => ({
  type: LOGOUT_FIREBASE_USER,
  payload: FireBaseTools.logoutUser(user)
})
