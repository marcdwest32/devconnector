import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './reducers/alert'
import authReducer from './reducers/auth'
import profileReducer from './reducers/profile'
import postReducer from './reducers/post'

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
  },
})

export default store
