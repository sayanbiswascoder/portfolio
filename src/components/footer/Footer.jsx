import React from "react";
import Logo from "../../assets/logo.svg";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { FaRedditAlien } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={Logo} alt="logo" className="logo" />
        Sayan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://twitter.com/sudo_sayan"
          rel="noreferrer"
          target="_blank"
          aria-label="Twitter"
        >
          <BsTwitterX />
        </a>
        <a
          href="https://discord.com/users/948154541382193163"
          rel="noreferrer"
          target="_blank"
          aria-label="Discord"
        >
          <SiDiscord />
        </a>
        <a
          href="https://instagram.com/sudo_sayan"
          rel="noreferrer"
          target="_blank"
          aria-label="Instagram"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.reddit.com/user/sayanbiswas3/"
          rel="noreferrer"
          target="_blank"
          aria-label="Reddit"
        >
          <FaRedditAlien />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; All rights reserved to Sayan.</small>
      </div>
    </footer>
  );
};

export default Footer;
