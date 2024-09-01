import { CryptoCurrencyCards, MarketsCards } from "../../constants";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Markets.css";

const Markets = () => {
  return (
    <section className="Markets gridSection">
      <div className="sectionDesc marketDesc">
        <SectionHeader
          title="Markets at finger"
          para="The Blockchain is a decentralized, digital ledger of transactions that
          are recorded confirmed."
        />
        {MarketsCards.map((el, index) => {
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
      <div className="sectionPic marketspicSection" id="sectionPic">
        <h1 className="marketspicHeader">CRYPTOCURRENCY</h1>
        <div className="marketsPicContainer">
          {CryptoCurrencyCards.map((el, index) => {
            return (
              <Card
                key={index}
                img={el.Img}
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

export default Markets;
