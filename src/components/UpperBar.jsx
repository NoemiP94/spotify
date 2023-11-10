import { Col, Container, Row } from 'react-bootstrap'

const UpperBar = () => {
  return (
    <Container>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
    </Container>
  )
}

export default UpperBar
