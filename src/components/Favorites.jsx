import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          <h1>I tuoi preferiti</h1>
          {favorites.length > 0 ? (
            favorites.map((companyName) => (
              <ListGroup>
                <ListGroupItem
                  className="d-flex align-items-center justify-content-between mb-3"
                  key={companyName}
                >
                  <Link className="nav-link" to={`/${companyName}`}>
                    {companyName}
                  </Link>
                  <Button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: companyName,
                      })
                    }}
                  >
                    🗑️
                  </Button>
                </ListGroupItem>
              </ListGroup>
            ))
          ) : (
            <Alert variant="info">non hai nessun preferito</Alert>
          )}
        </Col>
      </Row>
    </Container>
  )
}
export default Favorites
