import React from 'react'

import './nav.css'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link } from "gatsby"
import { BsArrowRightShort } from 'react-icons/bs'


import { useState } from 'react'

const Nav = () => {

  //   // function boundingScroll(selector) {
  //   //   const el = document.querySelector(selector)
  //   //   const rect = el.getBoundingClientRect()
  //   //   if (rect.top <= (window.innerHeight / 2) && rect.bottom >= (window.innerHeight / 2)) return true
  //   //   return false
  //   // }
  //   const section = document.querySelectorAll("section[id]")
  //   window.addEventListener("scroll", () => {
  //     // if (scrollY > 50) header.classList.add("sticky")
  //     // else header.classList.remove("sticky")

  //     // section.forEach((current) => {
  //     //     // const sectionId = current.getAttribute("id")
  //     //     console.log(current);
  //     //     // if (boundingScroll(`#${sectionId}`)) {
  //     //     //     document.querySelector(`.menu-item a[href*="${sectionId}"]`).classList.add("active")
  //     //     //     return;
  //     //     // }
  //     //     // document.querySelector(`.menu-item a[href*="${sectionId}"]`).classList.remove("active")
  //     // })

  // })
  function boundingScroll(selector) {
    const el = document.querySelector(selector)

    if (!el) {
      console.error("Element not found with selector:", selector);
      return false;
    }

    const rect = el.getBoundingClientRect()
    if (rect.top <= (window.innerHeight / 2) && rect.bottom >= (window.innerHeight / 2)) return true
    return false
  }

  if (typeof window !== "undefined") {
    const section = document.querySelectorAll("section[id]");

    console.log(section);
    window.addEventListener("scroll", () => {
      Array.from(section).forEach((current) => {
        // if (current === 'anonymous') {
        //   return
        // }
        const sectionId = current.getAttribute("id")
        if (boundingScroll(`#${sectionId}`)) {
          // document.querySelector(`a[href*="${sectionId}"]`).classList.add("active")
          console.log(sectionId)
          setActiveNav(`#${sectionId}`)
          return;
        }
        // document.querySelector(`a[href*="${sectionId}"]`).classList.remove("active")


      })
    })
  }


  const [activeNav, setActiveNav] = useState('#');
  // setActiveNav('#home');

  return (
    <nav>
    {/* <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active': ''}> <AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}> <AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active': ''}> <BiBook /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}> <BiMessageSquareDetail /></a> */}
      <a href='#' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}> <AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /></a>
      {/* <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BsArrowRightShort /></a> */}
      <Link className='addiPages' to="/about">About <span className='iconContainer'><BsArrowRightShort  className='iconNext' /> </span> </Link>
      <Link className='addiPages' to="/project">Projects <span className='iconContainer'><BsArrowRightShort  className='iconNext' /> </span> </Link>
      <Link className='addiPages' to="/work">Wor <span className='iconContainer'><BsArrowRightShort  className='iconNext' /> </span> </Link>
    </nav>
  )
}

export default Nav