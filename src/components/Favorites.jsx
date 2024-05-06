import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap"
import Job from "./Job"
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
            favorites.map((jobData, i) => (
              <ListGroup>
                <ListGroupItem key={i}>
                  <Link to={`/${jobData.company_name}`}>
                    {jobData.company_name}
                  </Link>
                  <Button
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: i })
                    }}
                  >
                    Delete
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
