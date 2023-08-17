import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {SiReplit} from 'react-icons/si'

const HeaderSocial =() => {
  return (
    <div className="header__socials">
      <a href="https://github.com/sayan-the-rat" target="_blank" rel="noreferrer"><BsGithub/></a>
      <a href="https://replit.com/@SayanBiswas8" target="_blank" rel="noreferrer"><SiReplit/></a>
      <a href="https://www.linkedin.com/in/sayan-the-rat" target="_blank" rel="noreferrer"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocial