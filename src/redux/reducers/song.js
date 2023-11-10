import { GET_POP_SONGS, GET_ROCK_SONGS } from '../actions'

const initialState = {
  tracks: [],
}

console.log(initialState)
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK_SONGS:
      return {
        ...state,
        tracks: action.payload,
      }
    case GET_POP_SONGS:
      return {
        ...state,
        tracks: action.payload,
      }
    default:
      return state
  }
}

export default songReducer
