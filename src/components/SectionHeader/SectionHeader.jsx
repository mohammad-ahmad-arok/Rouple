import "./SectionHeader.css";

const SectionHeader = ({ title, para }) => {
  return (
    <div className="SectionHeader">
      <h1 className="sectionHeader">{title}</h1>
      <p className="sectionPara">{para}</p>
    </div>
  );
};

export default SectionHeader;
