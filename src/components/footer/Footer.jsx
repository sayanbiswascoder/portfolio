import React from 'react'
import Logo from '../../assets/logo.svg'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = ()=>{
  return(
    <footer>
	<a href="#home" className="footer__logo">
	  <img src={Logo} alt="logo" className="logo"/>
	  Sayan
	</a>

	<ul className="permalinks">
	    <li><a href="#home">Home</a></li>
	    <li><a href="#about">About</a></li>
	    <li><a href="#experience">Experience</a></li>
	    <li><a href="#portfolio">Portfolio</a></li>
	    <li><a href="#contact">Contact</a></li>
	</ul>

	<div className="footer__socials">
	    <a href="https://twitter.com/sayan_the_rat" rel='noreferrer' target='_blank'><FiTwitter/></a>
	    <a href="https://www.facebook.com/profile.php?id=100056755894484&mibextid=ZbWKwL" rel='noreferrer' target='_blank'><FiFacebook/></a>
	    <a href="https://instagram.com/sayan_coder" rel='noreferrer' target='_blank'><FiInstagram/></a>
	</div>

	<div className="footer_copyright">
	    <small>&copy; All rights reserved to Sayan.</small>
	</div>
    </footer>
  )
}

export default Footer
