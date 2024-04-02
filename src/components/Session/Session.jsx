import SessionStyle from "./Session.module.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Session = ({ selectedFilm,onTimeSelected }) => {
  
  // console.log(selectedTimeIndex);

  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleString("en-US", { weekday: "long" })
  );
  //   console.log(new Date().toLocaleString('en-US', { weekday: 'long' }))

  //* hangi scdule ise onun zamanları
  const selectedScheduleTimes =
    selectedFilm.schedule?.find((schedule) => schedule.day === selectedDay)
      ?.times || [];
  // console.log(selectedScheduleTimes)
  const handleTimeSelect = (index) => {
    onTimeSelected() // Ticket sayfasına geçiş
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
          onChange={(e) => setSelectedDay(e.target.value)}
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

        <div className="my-5 d-flex justify-content-center">
          {selectedScheduleTimes.map((time, index) => (
            <div
            role="button"
            className={`${SessionStyle.time} border border-2 border-warning p-3 rounded-3 mx-3 d-flex gap-1 justify-content-center align-items-center`}
            key={index}
            onClick={() => handleTimeSelect(index)} 
          >
            <p className="fw-bold fs-4">{time.time} </p>
            <p className={SessionStyle.format}>{time.format}</p>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Session;
