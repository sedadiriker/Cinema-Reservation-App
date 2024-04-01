import Fılms from "../../components/Fılms/Fılms"
import Header from "../../components/Header/Header"
import moviesSchedule from "../../helpers/data"
import HomeStyle from "./Home.module.css"

const Home = ({handlePage}) => {

 
  return (
    <div className={HomeStyle.home}>
          <Header/>
          <hr className={`text-white`} />
          <h2 className={`text-white px-5`}>Vizyondaki Filmler</h2>
          <hr className={`text-white`} />
          <Fılms handleSelect={handlePage} films={moviesSchedule}/>
    </div>
  )
}

export default Home
