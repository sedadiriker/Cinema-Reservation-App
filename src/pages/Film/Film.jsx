import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import FilmStyle from "./Film.module.css";
import Session from "../../components/Session/Session";

const Film = ({ handlePage, selectedFilm, handleTicketPage }) => {
  // console.log(selectedFilm.title)
  //* Ticket tıklandığında sessiona ilerleme
  const handleTicketClick = () => {
    const sessionElement = document.getElementById("session");
    if (sessionElement) {
      window.scrollTo({
        top: sessionElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={FilmStyle.film}>
      <div className={`${FilmStyle.header} position-relative w-100`}>
        <Header handlepage={handlePage} />
      </div>
      <Row
        xs={1}
        lg={2}
        className={`${FilmStyle.main} align-items-center justify-content-center row-gap-5 px-5`}
      >
        <Col className={`${FilmStyle["selectedFilm-image"]}`}>
          <img src={selectedFilm.smallImage} alt={selectedFilm.title} />
        </Col>
        <Col className={`${FilmStyle["selectedFilm-text"]} h-100 text-white px-4`}>
          <div className="d-flex justify-content-between mb-4 align-items-center">
            <h2 className="text-warning">{selectedFilm.title}</h2>
            <button
              onClick={handleTicketClick}
              className={`btn bg-warning h-50`}
            >
              Ticket
            </button>
          </div>
          <div className="story my-3">{selectedFilm.story}</div>
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
      <div id="session">
        <Session
          selectedFilm={selectedFilm}
          handleTicketPage={handleTicketPage}
        />
      </div>
    </div>
  );
};

export default Film;
