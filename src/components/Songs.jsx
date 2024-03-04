import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsAction } from '../redux/actions'
import Playlist from './Playlist'

const Songs = () => {
  const playlistRock = useSelector(
    (state) => state.song.genres && state.song.genres[0]
  )
  const playlistPop = useSelector(
    (state) => state.song.genres && state.song.genres[1]
  )
  const playlistHipHop = useSelector(
    (state) => state.song.genres && state.song.genres[2]
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongsAction('Rock'))
    dispatch(getSongsAction('Pop'))
    dispatch(getSongsAction('HipHop'))
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>

            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {playlistRock &&
                playlistRock
                  .map((songs) => {
                    return <Playlist key={songs.id} genre={songs} />
                  })
                  .slice(0, 4)}
            </Row>
          </div>
        </Col>
        <Col xs={10}>
          <div id="rock">
            <h2>Pop Culture</h2>

            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {playlistPop &&
                playlistPop
                  .map((songs) => {
                    return <Playlist key={songs.id} genre={songs} />
                  })
                  .slice(0, 4)}
            </Row>
          </div>
        </Col>
        <Col xs={10}>
          <div id="rock">
            <h2>#HipHop</h2>

            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {playlistHipHop &&
                playlistHipHop
                  .map((songs) => {
                    return <Playlist key={songs.id} genre={songs} />
                  })
                  .slice(0, 4)}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Songs
