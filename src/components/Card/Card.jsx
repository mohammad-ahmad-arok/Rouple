import "./Card.css";

const Card = ({ img, title, para, vertical = false }) => {
  return (
    <div className={`eachProcesses ${vertical ? "vertical" : ""}`}>
      <img src={img} alt={title} />
      <div className="eachprocessesPara">
        <h1 className="processTitle">{title}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Card;
