import "./Experiences.css";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
const Experiences = () => {
  return (
    <section id="experience">
      <h5>what Skills I have</h5>
      <h2>My Experience</h2>
      <div className="contianer container_experience">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience">
              <FaHtml5 className="experience_content_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">experience</small>
              </div>
            </article>
            <article className="experience">
              <SiCss3 className="experience_content_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">experience</small>
              </div>
            </article>
            <article className="experience">
              <IoLogoJavascript className="experience_content_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">experience</small>
              </div>
            </article>
            <article className="experience">
              <FaReact className="experience_content_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">experience</small>
              </div>
            </article>
            <article className="experience">
              <DiBootstrap className="experience_content_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience">
              <FaNodeJs className="experience_content_icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience">
              <SiExpress className="experience_content_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience">
              <SiMongodb className="experience_content_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience">
              <SiMysql className="experience_content_icon" />
              <div>
                <h4>My SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
