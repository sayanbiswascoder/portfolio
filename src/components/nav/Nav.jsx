import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {CiUser} from 'react-icons/ci'
import {BiBook} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState,useEffect} from 'react'

const Nav = ({hh,ah,eh,ph})=>{
	const [activeNav,setActiveNav] = useState('#home');
	const [scrollPos, setScrollPos] = useState(0);
	
	useEffect(() => {
	  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  function handleScroll() {
    setScrollPos(window.scrollY);
  }
  /*if(scrollPos >= 0 && scrollPos< 990){
    setActiveNav('#home')
  }
  else if(scrollPos >= hh && scrollPos< hh+ah){
    setActiveNav('#about')
  }*/
  return(
    <nav>
	<a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''||(0<= scrollPos&&scrollPos<hh)?setActiveNav('#home'):''}>
	<HiOutlineHome className="nav__icon"/>
	<span className="nav__text">Home</span>
	</a>
	<a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''||(hh<= scrollPos&&scrollPos<hh+ah)?setActiveNav('#about'):''}>
	<CiUser className="nav__icon"/>
	<span className="nav__text">About</span>
	</a>
	<a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''||(hh+ah<= scrollPos&&scrollPos<hh+ah+eh)?setActiveNav('#experience'):''}>
	<BiBook className="nav__icon"/>
	<span className="nav__text">Experience</span>
	</a>
	<a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''||(hh+ah+eh<= scrollPos&&scrollPos<hh+ah+eh+ph)?setActiveNav('#portfolio'):''}>
	<BsCodeSlash className="nav__icon"/>
	<span className="nav__text">Projects</span>
	</a>
	<a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''||(hh+ah+eh+ph<=scrollPos)?setActiveNav("#contact"):''}>
	<BiMessageSquareDetail className="nav__icon"/>
	<span className="nav__text">Contact</span>
	</a>
	<div class="indicator"></div>
    </nav>
  )
}

export default Nav
