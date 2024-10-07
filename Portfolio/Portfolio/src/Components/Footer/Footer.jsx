import "./Footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <h2>Nalina Mehsram</h2>
      <div>
        <p>Home</p>
        <p>About me</p>
        <p>Experience</p>
        <p>portfolio</p>
        <p>Contact</p>
      </div>
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
      <h5>Nalina Meshram.All right reversed</h5>
    </footer>
  );
};

export default Footer;
