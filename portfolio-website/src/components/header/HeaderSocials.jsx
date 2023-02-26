import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsDribbble} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aman-thamminana/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/amantham20" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/living_like_a.man/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials