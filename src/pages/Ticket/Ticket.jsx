import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import TicketStyle from "./Ticket.module.css";
import { cinemaSeats } from "../../helpers/data";
import { useState } from "react";

const Ticket = ({ handlePage, selectedTime, selectFilm, selectedDay }) => {
  // console.log(selectedTime);
  // console.log(selectedDay);
  const [selectedSeats, setSelectedSeats] = useState([]);
console.log(selectedSeats)
  const isSeatSelected = (seatId) => {
    return selectedSeats.includes(seatId)
  };

  // koltukseç yada iptal et
  const handleSeatClick = (seat) => {
    if (seat.isAvailable) {
      if (isSeatSelected(seat.id)) {
        // seçiliyse kaldır
        setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
      } else {
        // seç ve diziye ekle
        setSelectedSeats([...selectedSeats, seat.id]);
      }
    }
  };
  
  return (
    <div className={TicketStyle.ticket}>
      <div className={`${TicketStyle.header} position-relative`}>
        <Header />
        <p
          onClick={handlePage}
          className={`btn bg-warning ${TicketStyle.home}`}
        >
          Home
        </p>
      </div>

      <Row xs={1} className={TicketStyle.main}>
        <Col className="text-white">
          <h3 className="my-2">Koltuk Seçiniz</h3>
          <hr />
          <div
            className={`${TicketStyle.information} d-flex justify-content-between align-items-center px-4 py-1`}
          >
            <p>
              {selectedDay} <span className="text-warning">Salon-2</span>
            </p>
            <p className="fs-1">{selectFilm.title}</p>
            <div className="text-center text-warning">
              <p className="fw-bold fs-3">{selectedTime.time}</p>
              <p>{selectedTime.format}</p>
            </div>
          </div>
        </Col>
      </Row>

      <div className="cinemaSeats text-white text-center d-flex flex-column align-items-center gap-1">
        {cinemaSeats.map((seatGroup, index) => (
          <div className="d-flex justify-content-center gap-4" key={index}>
            {seatGroup.map((seat) => (
              <span
                onClick={() => handleSeatClick(seat)}
                className={`${
                  TicketStyle.seat
                } d-flex justify-content-center rounded-2 ${
                  !seat.isAvailable ? "bg-danger" : ""
                } ${isSeatSelected(seat.id) ? "bg-warning" : "bg-secondary"}`}
                key={seat.id}
              >
                {seat.id}
              </span>
            ))}
          </div>
        ))}

        <div className="screen mt-4 fs-3 w-50 d-flex flex-column justify-content-center align-items-center">
          <p className="text-warning">Perde</p>
          <p className="w-50 bg-warning h-50 py-1"></p>
        </div>
      </div>


      <div
        className={`${TicketStyle["seat-information"]} text-white d-flex gap-5`}
      >
        <div className="chosen">
          <span className="bg-warning px-3 py-2 rounded-2 mx-2"></span>
          <span>Chosen</span>
        </div>
        <div className="filled">
          <span className="bg-danger px-3 py-2 rounded-2 mx-2"></span>
          <span>Filled</span>
        </div>
        <div className={TicketStyle.empty}>
          <span className="px-3 py-2 rounded-2 mx-2"></span>
          <span>Empty</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
