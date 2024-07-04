import React, { useState, useEffect, useRef } from 'react'
import './header.css'
import HeaderSocial from './HeaderSocial'
import ME from "../../assets/me.png"
import HeaderSocialMobile from './HeaderSocialMobile'

const Header = ({getHeight})=>{
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  },[])
  getHeight(height)
  return(
    <header id="home" ref={ref}>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Sayan Biswas</h2>
        <h5 class="text-light">Fullstack Developer</h5>
        <div className="cta">
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
        <HeaderSocial />
        
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
          <HeaderSocialMobile/>
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
