import "./Header.css";
import CTA from "../Headers/CTA";
import me from "../../assets/me.png";
import HeaderSection from "./HeaderSection";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nalina Meshram</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSection />
        <div className="mypics">
          <img src={me} alt="mypic" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
