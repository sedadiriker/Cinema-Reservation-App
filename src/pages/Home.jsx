import Fılms from "../components/Fılms/Fılms"
import moviesSchedule from "../helpers/data"
import HomeStyle from "./Home.module.css"

const Home = () => {
  return (
    <div className={HomeStyle.home}>
          <Fılms films={moviesSchedule}/>
    </div>
  )
}

export default Home
