import { GET_PROFILE, CLEAR_PROFILE, PROFILE_ERROR } from '../actions/types'

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      }
    default:
      return state
  }
}

export default profileReducer
