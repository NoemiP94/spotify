import { GET_SONGS } from '../actions'

const initialState = {
  tracks: [],
}
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        tracks: action.payload,
      }
    default:
      return state
  }
}

export default songReducer
