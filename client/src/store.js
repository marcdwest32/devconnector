import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './reducers/alert'
import authReducer from './reducers/auth'

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
})

export default store
