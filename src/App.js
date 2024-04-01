import Film from "./pages/Film/Film";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {
  const [currentPage,setCurrentPage] = useState("home")

  const handlePage = () => {
    setCurrentPage(currentPage => currentPage === 'home' ? 'film' : 'home' )
  }
  return (
    <div className="App">

      {currentPage === 'home' && <Home handlePage={handlePage} />}
      {currentPage === 'film' && <Film handlePage={handlePage} />}  
    </div>
  );
}

export default App;
