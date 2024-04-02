import Film from "./pages/Film/Film";
import Home from "./pages/Home/Home";
import Ticket from "./pages/Ticket/Ticket";
import { useState } from "react";

function App() {
  const [currentPage,setCurrentPage] = useState("home")
  const [selectFilm, setSelectFilm] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)

   const handlePage = (page, film = null) => {
    setCurrentPage(page)
    if(film) {
      setSelectFilm(film)
    } else {
      setSelectFilm(null)
    }
  }
  const handleTicketPage = (time,selectedDateText) => {
    setSelectedTime(time)
    setCurrentPage('ticket')
    setSelectedDay(selectedDateText)
  };
  return (
    <div className="App">

<div className="App">
      {currentPage === 'home' && <Home handlePage={(film) => handlePage('film', film)} />}
      {currentPage === 'film' && <Film selectedFilm={selectFilm} handlePage={() => handlePage('home')} handleTicketPage={handleTicketPage} />}
      {currentPage === 'ticket' && <Ticket handlePage={() => handlePage('home')} selectedTime={selectedTime} selectFilm= {selectFilm} selectedDay={selectedDay}/>}
    </div>
    </div>
  );
}

export default App;
