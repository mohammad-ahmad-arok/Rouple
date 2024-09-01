import Button from "../Button/Button";
import "./CarouselCard.css";

const CarouselCard = ({ Img, Title, Para, Price, Discount }) => {
  return (
    <div className="eachCarousel eachCarouselBorder">
      <img src={Img} alt={Title} />
      <article className="carouselDesc">
        <h1 className="carouselTitle">{Title}</h1>
        <p className="carouselPara">{Para}</p>
        <div className="carouselPrice">
          <h3>{Price}</h3>
          <span className="rect"></span>
          <h3 className="carouselDiscount">{Discount}</h3>
        </div>
        <Button text="Buy & Trade" />
      </article>
    </div>
  );
};

export default CarouselCard;
