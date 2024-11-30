import "./Footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="logo">
        Nalina Meshram
      </a>
      <ul className="promolinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_social">
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaFacebookSquare />
        </a>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <SiLeetcode />
        </a>
        <a href="">
          <CiTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <h5>&copy;Nalina Meshram.All right reversed</h5>
      </div>
    </footer>
  );
};

export default Footer;
