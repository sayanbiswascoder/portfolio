import React,{ useState, useEffect, useRef } from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = ({getHeight})=>{
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  },[])
  getHeight(height)
  return(
    <div ref={ref}>
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ year experience</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>30+ completed projects</small>
            </article>
          </div>
        <p>Hello!My name is Sayan Biswas,and I'm a fullstack web developer.
        I have an in-depth knowledge of HTML, CSS, JavaScript, Django, and MySQL.
        On my portfolio website, you can find examples of my work, including the projects I have completed and the technologies I have used. If you need help with a project or have any questions, please do not hesitate to reach out. I look forward to helping you bring your ideas to life!</p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
