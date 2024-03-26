import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/harshavardhan-rajinikanth-439858172/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Harsha-2324" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials