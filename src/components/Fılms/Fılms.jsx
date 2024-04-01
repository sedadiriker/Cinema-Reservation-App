import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import FılmsStyle from "./Fılms.module.css"

const Fılms = ({ films }) => {
  return (
    <div>
      <Carousel fade className={FılmsStyle.carousel}>
        {films.map((film) => (
          <CarouselItem className={FılmsStyle["carousel-item"]} key={film.id}>
            <img role="button" src={film.image} alt={film.title} />
          </CarouselItem>
        ))}
      </Carousel>
      <span className={FılmsStyle["custom-next-icon"]} />
      
    </div>
  );
};

export default Fılms;
