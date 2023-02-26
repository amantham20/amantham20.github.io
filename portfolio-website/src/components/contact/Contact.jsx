import React from 'react'

import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {useRef} from 'react';

import emailjs from 'emailjs-com';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rh74utw', 'template_kqggvgh', form.current, 'Pe-Zwh0k1h_kB6iSs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      NotificationManager.success('', 'Message sent successfully', 3000);
  };



  return (
    <section id='contact' className='sect'>
      <h5>Get In Touch</h5>
      <h1 className='contact_me_tittle'>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <atricle className="contact__option">
            <MdOutlineEmail className="contact__icon"/>
            <h4>Email</h4>
            <h5>Hey@amantham.com</h5>
            <a href="mailto:hey@amantham.com">send a message</a>
          </atricle>
          {/* <atricle className="contact__option">
            <MdOutlineEmail className="contact__icon"/>
            <h4>passenger <br/> pegions</h4>
            {/* <h5>temp@gmail.com</h5>
            <a href="mailto:temp@gmail.com">send a message</a>
            <h5> replies are </h5>
            <h5>not guaranteed</h5>
          </atricle> */}
          
        </div>

        {/* <div className='formarea'> */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text"  name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name='message' placeholder='Your Message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message</button>
          </form>
        {/* </div> */}

        <NotificationContainer/>

      </div>
    </section>
  )
}

export default Contact