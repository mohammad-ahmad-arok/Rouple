import Switch from "../Switch/Switch";
import {
  FaBarsStaggered,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { IoCloseOutline, IoLogoWhatsapp } from "react-icons/io5";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [toggel, settoggel] = useState(false);
  return (
    <nav>
      <div id="logo">
        <a href="#">Rouple</a>
      </div>
      <ul className={`nav ${toggel ? "showNav" : ""}`} id="nav">
        <ul className="navLogo">
          <a href="#">Rouple</a>
        </ul>

        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">About Us</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
        <li className="sociallinkContainer">
          <FaXTwitter />
          <FaFacebook />
          <FaLinkedin />
          <IoLogoWhatsapp />
        </li>
        <li className="nav-link">
          <Switch />
        </li>
      </ul>
      <div id="barContainer">
        {toggel ? (
          <IoCloseOutline onClick={() => settoggel((prev) => !prev)} />
        ) : (
          <FaBarsStaggered onClick={() => settoggel((prev) => !prev)} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
