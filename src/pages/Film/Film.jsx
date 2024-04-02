import { Col, Row } from "react-bootstrap"
import Header from "../../components/Header/Header"
import FilmStyle from "./Film.module.css"

const Film = ({handlePage,selectedFilm}) => {
  return (
    <div className={FilmStyle.film}>
        <div className={`${FilmStyle.header} position-relative`}>
        <Header/>
        <p onClick={handlePage} className={`btn bg-warning ${FilmStyle.home}`}>Home</p>
        </div>
        <Row xs={1} md={2} className={`${FilmStyle.main} justify-content-center align-items-center gap-5`}>
        <Col className={`${FilmStyle["selectedFilm-image"]}`}>
                <img src={selectedFilm.image} alt={selectedFilm.title} />
            </Col>
            <Col className={` FilmStyle["selectedFilm-text"] h-100 text-white`}>
                <div className="d-flex justify-content-between mb-4">
                    <h2 className="text-warning">{selectedFilm.title}</h2>
                    <button className={`btn bg-warning`}>Ticket</button>
                </div>
                <div className="story my-3">
                    {selectedFilm.story}
                </div>
                <div className="director lh-sm">
                    <h3 className="fw-bold">Director:</h3>
                    <p>{selectedFilm.director}</p>
                </div>
                <div className="cast">
                    <h3 className="fw-bold">Cast:</h3>
                    <p>{selectedFilm.cast}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="genres">
                        <h3 className="fw-bold">Genre:</h3>
                        <p>{selectedFilm.genres}</p>
                    </div>
                    <div className="time">
                        <h3 className="fw-bold">Time:</h3>
                        <p>{selectedFilm.time}</p>
                    </div>
                </div>
            </Col>
        </Row>

    </div>
  )
}

export default Film