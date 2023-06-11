import React from 'react'
import './experience.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' className='sect'>
      <h5>Get To Know About</h5>
      <h1> My skills</h1>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS/Sass</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Novice</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of front End */}

        <div className='experience__backend'>
          <h3>Programming</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>C++</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Ruby</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>ARM Assembly</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Rust</h4>
              <small className='text-light'>Novice</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Swift</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Flutter</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Dart</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>React Native</h4>
              <small className='text-light'>Novice</small>
              </div>
            </article>
            
            {/* <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>My SQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>

              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience