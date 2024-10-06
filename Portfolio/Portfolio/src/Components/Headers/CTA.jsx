import CV from "../../assets/NalinaCrioResume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        let's talk
      </a>
    </div>
  );
};

export default CTA;
