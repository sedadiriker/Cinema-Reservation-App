import Header from "../../components/Header/Header"
import FilmStyle from "./Film.module.css"

const Film = ({handlePage}) => {
  return (
    <div className={FilmStyle.film}>
        <div className={`${FilmStyle.header} position-relative`}>
        <Header/>
        <p onClick={handlePage} className={`text-white btn btn-danger ${FilmStyle.home}`}>Home</p>
        </div>

    </div>
  )
}

export default Film
