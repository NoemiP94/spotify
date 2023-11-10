import { Col, Container, Row } from 'react-bootstrap'
import {
  PlayFill,
  Repeat,
  Shuffle,
  SkipBackwardFill,
  SkipForwardFill,
} from 'react-bootstrap-icons'

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <Shuffle className="text-secondary" />
                </a>
                <a href="#">
                  <SkipBackwardFill className="text-secondary" />
                </a>
                <a href="#">
                  <PlayFill className="text-secondary" />
                </a>
                <a href="#">
                  <SkipForwardFill className="text-secondary" />
                </a>
                <a href="#">
                  <Repeat className="text-secondary" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Player
