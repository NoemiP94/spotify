import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BookFill, HouseFill } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { getSearchAction } from '../redux/actions'

const Navbar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (query.trim() !== '') {
      const results = await getSearchAction(query)
      onSearchResults(results)
      console.log(query)
    }
  }
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="container flex-column align-items-start">
              <a className="navbar-brand" href="index.html">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/800px-Spotify_logo_with_text.svg.png"
                  alt="Spotify Logo"
                  width="131"
                  height="40"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <a
                        className="nav-item nav-link d-flex align-items-center"
                        href="#"
                      >
                        <HouseFill />
                        &nbsp; Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-item nav-link d-flex align-items-center"
                        href="#"
                      >
                        <BookFill />
                        &nbsp; Your Library
                      </a>
                    </li>
                    <li>
                      <form
                        className="input-group mt-3"
                        onSubmit={handleSubmit}
                      >
                        <input
                          type="text"
                          className="form-control"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          value={query}
                          onChange={(e) => {
                            setQuery(e.target.value)
                            console.log(query)
                          }}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary btn-sm h-100"
                            type="submit"
                          >
                            GO
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-btn">
              <div>
                <button className="btn signup-btn btn-light" type="button">
                  Sign Up
                </button>
                <button className="btn login-btn btn-dark" type="button">
                  Login
                </button>
              </div>
              <div>
                <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
              </div>
            </div>
          </nav>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar
