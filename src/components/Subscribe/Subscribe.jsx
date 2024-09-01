import Button from "../Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="gridSection">
      <div className="sectionDesc newsletterDesc">
      <SectionHeader
          title="Subscribe news!"
          para="This is where crypto news websites come in handy and stay up-to-date this sphere."
        />
       
        <form action="#" className="newsletter">
          <input
            type="email"
            name=""
            id="newsletter"
            placeholder="enter your email"
          />
          <Button text='Subscribe'/>
        </form>
      </div>
      <div className="sectionPic bouncepic newsletterPic">
        <img src="/assets/images/newsletter.png" alt="newsletter" />
      </div>
    </section>
  );
};

export default Subscribe;
