import * as React from "react"
import Header from "../HomePageComponents/header/Header"
import Nav from "../HomePageComponents/nav/Nav"
import About from "../HomePageComponents/about/About"
import Experience from "../HomePageComponents/experience/Experience"
import Contact from "../HomePageComponents/contact/Contact"
import Footer from "../HomePageComponents/footer/Footer"


const IndexPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
