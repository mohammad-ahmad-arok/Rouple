import Button from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero gridSection">
      <div className="sectionDesc">
        <h1 className="headline">
          Most popular way to trade <span className="cryptoText">CRYPTO</span>.
        </h1>
        <p className="sub-headline">
          You can see a record of all your transactions anytime you want and
          never have to worry about someone erasing or stealing your money!
        </p>
        <div className="btnContainer">
          <Button text="Contact Now" />
          <Button text="play video" type="stroke" />
        </div>
      </div>
      <div className="sectionPic bouncepic" id="sectionPic">
        <img src="/assets/images/hero-image.png" alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
