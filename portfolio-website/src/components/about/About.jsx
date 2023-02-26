import React from 'react'

import './about.css'

import ME from '../../assets/Aman Logo.png'

import {BiCoffeeTogo} from 'react-icons/bi'
import {FaPizzaSlice} from 'react-icons/fa'
import {AiOutlineProject} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import {MdMusicNote} from 'react-icons/md'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutPage from '../about_page/AboutPage'
import ProjectsPage from '../project_page/ProjectsPage'

import { useState, useEffect } from 'react'
import firebase from '../../Firebase'
import { QuerySnapshot } from '@firebase/firestore'

import { Link } from 'react-router-dom'

import {SiVisualstudiocode, SiXcode, SiGooglechrome, SiPython, SiCplusplus, SiMacos, SiWindows, SiReact, SiFlutter, SiHtml5, SiCss3, SiGithub} from 'react-icons/si'


const About = () => {

  // const [s]
  const [informatics, setinformatics] = useState([]);

  const ref = firebase.firestore().collection('informatics');
  // console.log(ref);
  

  function getData(){
    ref.onSnapshot((QuerySnapshot) =>{
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(doc.data());
      });
      setinformatics(items);
    });  
  }


  useEffect(() => {
    getData();
  }, []);


  
  // function myFunction() {
              
  //   alert("Thank you for your interest; This part is still under construction come back later : ^ )");
  // }
  return (
    <section className='about sect' id='about'>
      <div className='heading_info'>
        <h5>Get To Know</h5>
        <h1>About Me!</h1>

      </div>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__img'>
            <img src={ME}/>
          </div>
        </div>    
     



        <div className='about__content'>
          
          <p>
          Student by day and developer by night; Currently pursuing a major in Computer Science, and Mathematics and a Minor in Computational Mathematics, Science & Engineering &#40;CMSE&#41;, and 
          Entrepreneurship & Innovation at Michigan State University. I fell in love with computers at first sight. My main interests include Algorithms and Computer theory, Cloud technology, and 
          Machine Learning/Artificial intelligence. I also dabble in other aspects of Business,  Engineering, web and mobile development.
          </p>

          <p>
          I'm involved in a variety of extracurriculars on campus, including AI club, Entrepreneurship club, and the Engineering Student Council. </p>

          <p>
            I also love spontaneously traveling, listening to overplayed music and consuming too much coffee.
          </p>
{/* 
          <h3>My favorite workflow and development enviroments</h3>
          {/* <div className='about__workflow'>
          <div> */}

            {/* <SiVisualstudiocode />
            <SiXcode /> */}
          {/* </div> */}
          {/* </div> */}


          <div className='live_block'><span class="blink_me">Live <span class="dot"></span></span></div>
          <div className='about__cards'>
            <artice className='about__card'>
              <BiCoffeeTogo className='about__icon'/>
              <h5>518</h5>
              <small>Cups of Coffee Drank</small>
            </artice>
            <artice className='about__card'>
              <FaPizzaSlice className='adjust_icon'/>
              <h5>230</h5>
              <small>Slices of Pizza Consumed</small>
            </artice>
            <artice className='about__card'>
              <AiFillProject  className='about__icon' />
              <h5>21</h5>
              <small>Projects Completed</small>
            </artice>
            <artice className='about__card'>
              <MdMusicNote  className='about__icon' />
              <h5>38,307</h5>
              <small>Minutes of Music</small>
            </artice>

            {/* <script>
              function myFunction() {
                  alert("Thank you for your interest this part is under construction come back later")
              }
            </script> */}

          </div>
          <div className='otherlinks'>
            
            {/* <link to="/project" className='btn About_Page'>Projects</link> */}
            <Link to="/project" className='btn About_Page' >Projects</Link>
            {/* <Link to="/today"/> */}
            {/* <a href="/about" className='btn About_Page'>More about me!</a> */}
            <Link to="/about" className='btn About_Page' >More about me!</Link>

        
             {/* <Route path='/projects' component={ProjectsPage}/> */}
            {/* </Router> */}
          </div>
            {/* <button onClick={myFunction} className='btn About_Page'>More about me!</button> */}
        </div>
      </div>




    </section>
  )
}

export default About