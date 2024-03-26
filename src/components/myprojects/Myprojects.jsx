import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/Screenshot 2024-03-15 114339.png'
import IMG2 from '../../assets/Screenshot 2024-03-26 203914.png'
import IMG3 from '../../assets/Screenshot 2024-03-26 204257.png'
import IMG4 from '../../assets/Screenshot 2024-03-26 203028.png'
import IMG5 from "../../assets/Screenshot 2024-03-26 210812.png";
const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Markdown Viewer(Capstone Project)</h3>
          <small className="text-light">
            MongoDB | ExpressJS | ReactJS | NodeJS | Bootstrap
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Harsha-2324/Capstone_Markdown_Viewer_FrontEnd.git"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://capstone-markdown-viewer-front-end.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Apple Shopping Cart</h3>
          <small className="text-light">
            ReactJS | Bootstrap | Context API
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Harsha-2324/ReactTask_5.git"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://contextapi-react-task-5.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Password Reset Application</h3>
          <small className="text-light">
            MongoDB | ExpressJS | ReactJS | NodeJS | Bootstrap
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Harsha-2324/NodeJSTask_4_Password_Reset_FrontEnd.git"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://harsha-mern-password-reset.netlify.app/login"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>My Portfolio(This website)</h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Harsha-2324/Portfolio.git"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://harsha-react-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>URL Shortener Application</h3>
          <small className="text-light">
            MongoDB | ExpressJS | ReactJS | NodeJS | Bootstrap
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Harsha-2324/URL-Shortener-FrontEnd.git"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://url-shortener-front-end-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Myprojects