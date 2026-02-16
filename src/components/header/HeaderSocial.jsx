import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiReplit } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/sayanbiswascoder"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/sayan-biswas-coder/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocial;
