import { GET_SONGS } from '../actions'

const initialState = {
  genres: [],
}
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        genres: [...state.genres, action.payload],
      }
    default:
      return state
  }
}

export default songReducer
