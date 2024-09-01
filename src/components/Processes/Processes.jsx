import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ProcessCards } from "../../constants";
import "./Processes.css";

const Processes = () => {
  return (
    <section className="Processes gridSection">
      <div className="sectionDesc processessDesc">
        <SectionHeader
          title="Chain Process"
          para="We do not charge any fees and we do not require any registration. You
          keep your privacy and your coins."
        />
        {ProcessCards.map((el, index) => {
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
      <div className="sectionPic bouncepic processesPic" id="sectionPic">
        <img src="/assets/images/chain-process-img.png" alt="chain-process" />
      </div>
    </section>
  );
};

export default Processes;
