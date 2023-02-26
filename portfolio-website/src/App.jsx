import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'

import CustomCursor from './CustomCursor'

const App = () => {
  return (
    <>
        {/* <CustomCursor /> ask about custom CustomCursor */}
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />

        

        
        
    
    </>
  );
}

export default App



