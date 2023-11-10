export const GET_SONGS = 'GET_SONGS'
export const GET_SEARCH = 'GET_SEARCH'

export const getSongsAction = () => {
  return (dispatch) => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen', {
      headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Errore nel recupero dei dati')
        }
      })
      .then((songs) => {
        dispatch({
          type: GET_SONGS,
          payload: songs,
        })
        console.log(songs)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }
}

export const getSearchAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query,
        {
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      )
      if (response.ok) {
        const { dataSearch } = await response.json()
        dispatch({
          type: GET_SEARCH,
          payload: dataSearch,
        })
      } else {
        throw new Error('Errore nel recupero dei dati')
      }
    } catch (error) {
      console.log('Errore', error)
    }
  }
}
