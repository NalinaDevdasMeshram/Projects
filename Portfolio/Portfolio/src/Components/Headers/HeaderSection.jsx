import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const HeaderSection = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://leetcode.com/u/meshramnalu16/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSection;
