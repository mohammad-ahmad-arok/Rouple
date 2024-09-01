import { fundsCards } from "../../constants";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Funds.css";

const Funds = () => {
  return (
    <section className="fundSection gridSection">
      <div className="sectionDesc">
        <SectionHeader
          title="Control your funds"
          para="Our mining pool offers some of the most competitive contracts in the market."
        />
        <div className="fundsContainer">
          {fundsCards.map((el, index) => {
            return (
              <Card
                key={index}
                img={el.Img}
                para={el.Para}
                title={el.Title}
                vertical={el.vertical}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Funds;
