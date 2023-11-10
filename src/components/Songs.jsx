import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsAction } from '../redux/actions'

const Songs = () => {
  const [songs, setSongs] = useState(null)
  const dispatch = useDispatch()
  const songsFromReduxStore = useSelector((state) => state.song.tracks)
  console.log(songsFromReduxStore)
  useEffect(() => {
    dispatch(getSongsAction())
  }, [])

  const changeSong = (songs) => setSongs(songs)

  return (
    <Container>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            {songsFromReduxStore && (
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                {songsFromReduxStore.data.slice(0, 4).map((song, i) => {
                  return (
                    <div className="text-center" key={song.id}>
                      <img src={song.album.cover_medium} alt="track" />
                      <p>
                        Track:
                        {song.title.length < 16
                          ? song.title
                          : song.title.substring(0.16)}
                      </p>
                      <p>Artist: {song.artist.name}</p>
                    </div>
                  )
                })}
              </Row>
            )}
          </div>
        </Col>
        <Col xs={10}>
          <div id="rock">
            <h2>Pop Culture</h2>
            {songsFromReduxStore && (
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {songsFromReduxStore.data.slice(0, 4).map((song, i) => {
                  return (
                    <div className="text-center" key={song.id}>
                      <img src={song.album.cover_medium} alt="track" />
                      <p>
                        Track:
                        {song.title.length < 16
                          ? song.title
                          : song.title.substring(0.16)}
                      </p>
                      <p>Artist: {song.artist.name}</p>
                    </div>
                  )
                })}
              </Row>
            )}
          </div>
        </Col>
        <Col xs={10}>
          <div id="rock">
            <h2>#HipHop</h2>
            {songsFromReduxStore && (
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {songsFromReduxStore.data.slice(0, 4).map((song, i) => {
                  return (
                    <div className="text-center" key={song.id}>
                      <img src={song.album.cover_medium} alt="track" />
                      <p>
                        Track:
                        {song.title.length < 16
                          ? song.title
                          : song.title.substring(0.16)}
                      </p>
                      <p>Artist: {song.artist.name}</p>
                    </div>
                  )
                })}
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Songs
