export const GET_SONGS = 'GET_SONGS'
export const GET_SEARCH = 'GET_SEARCH'

export const getSongsAction = (playlist) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${playlist}`,
        {
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      )
      if (res.ok) {
        const { data } = await res.json()
        console.log(data)
        dispatch({
          type: GET_SONGS,
          payload: data,
        })
        console.log('Playlist has been load correctly')
      } else {
        throw new Error('Playlist is fail!')
      }
    } catch (error) {
      console.log('Errore', error)
    }
  }
}

export const getSearchAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
        {
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      )
      if (response.ok) {
        const { data } = await response.json()
        console.log(data)
        dispatch({
          type: GET_SEARCH,
          payload: data,
        })
      } else {
        throw new Error('Errore nel recupero dei dati')
      }
    } catch (error) {
      console.log('Errore', error)
    }
  }
}
