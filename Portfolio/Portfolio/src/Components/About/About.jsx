import "./About.css";
import img from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="About">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={img} alt="not found" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>fresher</small>
            </article>
            <article className="about_card">
              <GrServices className="about_icons" />
              <h5>Skills</h5>
              <small>Frontend Developer</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icons" />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. I'm quietly
            confident, naturally curious, and perpetually working on improving
            my chops one design problem at a time.
          </p>
          <a href="#contact" className="btn btn-primary">
            let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
