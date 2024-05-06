import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaRegStar, FaStar } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.content)
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        {favorites && favorites.includes(data.company_name) ? (
          <FaStar
            className="icon"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name,
              })
            }}
          />
        ) : (
          <FaRegStar
            className="icon"
            onClick={() => {
              dispatch({ type: "ADD_TO_FAVORITES", payload: data.company_name })
            }}
          />
        )}
      </Col>
    </Row>
  )
}

export default Job
