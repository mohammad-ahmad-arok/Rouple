import "./Button.css";

const Button = ({ text ,type}) => {
  return (
    <button className={`button ${type}`}>
      <span className="button-content">{text}</span>
    </button>
  );
};

export default Button;
