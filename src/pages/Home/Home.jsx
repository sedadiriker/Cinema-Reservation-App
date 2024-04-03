import Fılms from "../../components/Fılms/Fılms";
import Header from "../../components/Header/Header";
import { moviesSchedule } from "../../helpers/data";
import HomeStyle from "./Home.module.css";

const Home = ({ handlePage }) => {
  return (
    <div className={HomeStyle.home}>
      <Header />
      <h2 className={`text-white px-5`}>Movies in theaters</h2>
      <Fılms handlePage={handlePage} films={moviesSchedule} />
    </div>
  );
};

export default Home;
