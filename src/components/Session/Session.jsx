import SessionStyle from "./Session.module.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Session = ({ selectedFilm,handleTicketPage }) => {
  const [selectedDateText, setSelectedDateText] = useState(""); // Yeni state

  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleString("en-US", { weekday: "long" })
  )
  //   console.log(new Date().toLocaleString('en-US', { weekday: 'long' }))

  const handleChange = (e) => {
    const selectedOptionText = e.target.options[e.target.selectedIndex].text; // Kullanıcıya gösterilen tarih metnini al
    setSelectedDay(e.target.value)
    setSelectedDateText(selectedOptionText); // Tarih metnini ayarla
  }

  //* hangi scdule ise onun zamanları
  const selectedScheduleTimes =
    selectedFilm.schedule?.find((schedule) => schedule.day === selectedDay)
      ?.times || [];
  const handleTimeSelect = (index) => {
    handleTicketPage(selectedScheduleTimes[index],selectedDateText) // Ticket sayfasına geçiş
  }
  return (
    <>
      <h4 className="text-center text-warning mt-5">Tarih Seçiniz</h4>
      <div>
        <Form.Select
          role="button"
          size="lg"
          className={`${SessionStyle.select} `}
          aria-label="Default select example"
          onChange={handleChange}
        >
          {selectedFilm.schedule?.map((daySchedule, index) => (
            <option key={index} value={daySchedule.day}>
              {`${
                +new Date().toLocaleDateString("en-GB", { day: "numeric" }) +
                index
              } ${new Date().toLocaleDateString("en-GB", { month: "long" })} ${
                daySchedule.day
              }`}
            </option>
          ))}
        </Form.Select>

        <Row xs={2} md={6} className="my-5 justify-content-center row-gap-4">
          {selectedScheduleTimes.map((time, index) => (
            <Col
            role="button"
            className={`${SessionStyle.time} border border-2 border-warning p-2 rounded-3 mx-3 d-flex gap-1 justify-content-center align-items-center`}
            key={index}
            onClick={() => handleTimeSelect(index)} 
          >
            <p className="fw-bold fs-4">{time.time} </p>
            <p className={SessionStyle.format}>{time.format}</p>
          </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Session;
