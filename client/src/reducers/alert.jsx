import { createSlice, createAction } from '@reduxjs/toolkit'
import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = []

// const alertSlice = createSlice({
//   name: 'alert',
//   initialState,
//   reducers: {
//     SET_ALERT: (state, action) => [...state, action.payload],
//     REMOVE_ALERT: (state, action) =>
//       state.filter((alert) => alert.id !== action.payload),
//   },
// })

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}

export default alertReducer
