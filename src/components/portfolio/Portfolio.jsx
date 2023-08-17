import React,{ useState, useEffect, useRef } from 'react'
import './portfolio.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
//import IMG1 from '../../assets/logo.svg'
import projects from './projects'
import {MdOpenInNew} from 'react-icons/md'

const Portfolio = ({getHeight})=>{
  console.log(projects)
  AOS.init({
    offset: 240,
    duration: 600,
  });
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  },[])
  getHeight(height)
  return(
    <div ref={ref}>
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          projects.map(elm=>{
            return(
              <article className="portfolio__item" data-aos="zoom-in">
                <div className="portfolio__item-image">
                  <img src={elm.imgUrl} alt="portfolio_image1"/>
                </div>
                <div className="portfolio__item-content" style={{"color": elm.fontColor}}>
                  <h3>{elm.name}</h3>
                  <small>{elm.desc}</small>
                  <div className="portfolio__item-cta">
                    <a href={elm.sourceUrl} className="btn" target="_blank" rel="noreferrer">{elm.sourceIcon}</a>
                    <a href={elm.url} className="btn btn-primary" target="_blank" rel="noreferrer"><MdOpenInNew/></a>
                  </div>
                </div>
              </article>
            )
          })
        }
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
  )
}

export default Portfolio
