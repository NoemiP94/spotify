import { useState } from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Player from './Player'
import { useDispatch } from 'react-redux'
import { getSearchAction, setSearchResultsAction } from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const [searchResults, setSearchResults] = useState([])
  const handleSearchResults = (results) => {
    dispatch(getSearchAction(results))
  }
  return (
    <>
      <Navbar onSearchResults={handleSearchResults} />
      <Main searchResults={searchResults} />
      <Player />
    </>
  )
}

export default Home
