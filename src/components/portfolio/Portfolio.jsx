import React, { useState, useEffect, useRef } from "react";
import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
//import IMG1 from '../../assets/logo.svg'
import projects from "./projects";
import { MdOpenInNew } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const Portfolio = ({ getHeight }) => {
  AOS.init({
    offset: 240,
    duration: 600,
  });
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    window.onload = () => {
      setHeight(ref.current.clientHeight);
      getHeight(ref.current.clientHeight);
    };
  }, [getHeight, ref, height]);
  return (
    <div ref={ref}>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {projects.map((elm, ind) => {
            return (
              <article key={ind} className="portfolio__item" data-aos="zoom-in">
                <div className="portfolio__item-image">
                  <img src={elm.imgUrl} alt={elm.name} />
                </div>
                <div
                  className="portfolio__item-content"
                  style={{ color: elm.fontColor }}
                >
                  <h3>{elm.name}</h3>
                  <small>{elm.desc}</small>
                  <div className="portfolio__item-cta">
                    {elm.sourceUrl.map((elm, ind) => {
                      return (
                        <a
                          href={elm}
                          className="btn"
                          target="_blank"
                          rel="noreferrer"
                          key={ind}
                          aria-label="GitHub Repo"
                        >
                          <BsGithub />
                        </a>
                      );
                    })}
                    {elm.url && (
                      <a
                        href={elm.url}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                      >
                        <MdOpenInNew />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
          {/* <article className="portfolio__item" data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={me} alt="portfolio_image1"/>
          </div>
          <div className="portfolio__item-content">
          <h3>item title</h3>
          <small>portfolio contact card description</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://sbloader.sayanbiswas8.repl.co/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Damo</a>
          </div>
          </div>
        </article>
        <article className="portfolio__item" data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={me} alt="portfolio_image1"/>
          </div>
          <div className="portfolio__item-content">
          <h3>item title</h3>
          <small>portfolio contact card description</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://sbloader.sayanbiswas8.repl.co/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Damo</a>
          </div>
          </div>
        </article>
        <article className="portfolio__item" data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={me} alt="portfolio_image1"/>
          </div>
          <div className="portfolio__item-content">
          <h3>item title</h3>
          <small>portfolio contact card description</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://sbloader.sayanbiswas8.repl.co/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Damo</a>
          </div>
          </div>
        </article>
        <article className="portfolio__item" data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={me} alt="portfolio_image1"/>
          </div>
          <div className="portfolio__item-content">
          <h3>item title</h3>
          <small>portfolio contact card description</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://sbloader.sayanbiswas8.repl.co/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Damo</a>
          </div>
          </div>
        </article>
        <article className="portfolio__item" data-aos="zoom-in">
          <div className="portfolio__item-image">
            <img src={me} alt="portfolio_image1"/>
          </div>
          <div className="portfolio__item-content">
          <h3>item title</h3>
          <small>portfolio contact card description</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://sbloader.sayanbiswas8.repl.co/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Damo</a>
          </div>
          </div>
        </article> */}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
