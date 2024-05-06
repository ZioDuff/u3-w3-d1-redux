import { Alert, Col, Container, Row } from "react-bootstrap"
import Job from "./Job"
import { useSelector } from "react-redux"

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content)

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          <h1>I tuoi preferiti</h1>
          {favorites.length > 0 ? (
            favorites.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <Alert variant="info">non hai nessun preferito</Alert>
          )}
        </Col>
      </Row>
    </Container>
  )
}
export default Favorites
