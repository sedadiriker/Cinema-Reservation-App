import Film from "./pages/Film/Film";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {
  const [currentPage,setCurrentPage] = useState("home")
  const [selectFilm, setSelectFilm] = useState(null)

  const handlePage = (film) => {
    setCurrentPage(currentPage => currentPage === 'home' ? 'film' : 'home' )
    setSelectFilm(film)
  }
  return (
    <div className="App">

      {currentPage === 'home' && <Home handlePage={handlePage} />}
      {currentPage === 'film' && <Film selectedFilm = {selectFilm} handlePage={handlePage} />}  
    </div>
  );
}

export default App;
