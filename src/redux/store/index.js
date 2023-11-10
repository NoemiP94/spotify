import { combineReducers, configureStore } from '@reduxjs/toolkit'
import songReducer from '../reducers/song'
import searchReducer from '../reducers/search'

const bigReducer = combineReducers({
  song: songReducer,
  search: searchReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
