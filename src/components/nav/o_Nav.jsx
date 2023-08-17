import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {CiUser} from 'react-icons/ci'
import {BiBook} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = ()=>{
	const [activeNav,setActiveNav] = useState('#home')
  return(
    <nav>
	<a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><HiOutlineHome/></a>
	<a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser/></a>
	<a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
	<a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsCodeSlash/></a>
	<a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
