import { Col, Container, Row } from 'react-bootstrap'
import UpperBar from './UpperBar'
import Songs from './Songs'

const Main = ({ searchResults }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <UpperBar />
        </Col>
        <Col>
          <Songs searchResults={searchResults} />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
