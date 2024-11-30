import "./Skills.css";
import img from "../../assets/pikcock.jpg";
const Skills = () => {
  const data = [
    {
      id: 1,
      title: "my image",
      GitHub: "https://github.com/CrioDo/meshramnalu16-ME_QKART_FRONTEND_V2",
      demo: "https://qkart-frontends.vercel.app/",
    },
    {
      id: 2,
      title: "my image",
      GitHub: "https://github.com/CrioDo/meshramnalu16-ME_QKART_FRONTEND_V2",
      demo: "https://qkart-frontends.vercel.app/",
    },
  ];
  return (
    <section id="skill">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container container_portfolio">
        {data.map(({ id, img, title, GitHub, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={img} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={GitHub} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
