import { cardData } from "../../constants";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../CarouselCard/CarouselCard";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="Carousel">
      <Slider {...settings}>
        {cardData.map((el, index) => {
          return (
            <CarouselCard
              key={index}
              Img={el.Img}
              Title={el.Title}
              Price={el.Price}
              Discount={el.Discount}
              Para={el.Para}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default Carousel;
