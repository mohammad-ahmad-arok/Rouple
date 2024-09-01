import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Button from "../Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Footer.css";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="joinSection">
        <div className="joinDesc">
          <SectionHeader
            title="Join with us"
            para="Once you have created your account, you can purchase coins from website."
          />
        </div>
        <Button text="JOIN NOW" type="stroke" />
      </div>

      <div className="footerlinksContainer">
        <div className="footerAboutus">
          <div id="logo">
            <a href="#">Rouple</a>
          </div>
          <p className="darkPara">
            With no commissions and a simple user interface, Prouple is the most
            reliable way to trade for Cryptocurrency.
          </p>
          <div className="footersociallinkContainer">
            <FaXTwitter />
            <FaFacebook />
            <FaLinkedin />
            <IoLogoWhatsapp />
          </div>
        </div>

        <div className="footerlink">
          <h1 className="linkTitle">Explore</h1>
          <a href="#" className="eachLink">
            About us
          </a>
          <a href="#" className="eachLink">
            FAQ
          </a>
          <a href="#" className="eachLink">
            Blog
          </a>
          <a href="#" className="eachLink">
            Contact
          </a>
        </div>

        <div className="footerlink">
          <h1 className="linkTitle">Service</h1>
          <a href="#" className="eachLink">
            Mining
          </a>
          <a href="#" className="eachLink">
            Control Data
          </a>
          <a href="#" className="eachLink">
            Design
          </a>
          <a href="#" className="eachLink">
            Security
          </a>
        </div>

        <div className="footerlink">
          <h1 className="linkTitle">Resource</h1>
          <a href="#" className="eachLink">
            Style Guide
          </a>
          <a href="#" className="eachLink">
            Change Log
          </a>
          <a href="#" className="eachLink">
            License
          </a>
        </div>
      </div>

      <div className="footerCopyright">
        <p>
          &copy; 2024 developed by{" "}
          <a href="#" className="developedBy">
            Mohammad Arok
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
