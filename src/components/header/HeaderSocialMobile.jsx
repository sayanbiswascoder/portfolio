import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiReplit } from "react-icons/si";

const HeaderSocialMobile = () => {
  return (
    <div className="header__socials_mobile">
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

export default HeaderSocialMobile;
