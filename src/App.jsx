import React from 'react'
import NavbarMobile from './components/sections/Navbar/Mobile/NavbarMobile'
import Navbar from './components/sections/Navbar/Desktop/Navbar'
import Hero from './components/sections/Hero/Hero'
import Services from './components/sections/Services/Services'
import Portfolio from './components/sections/Portfolio/Portfolio'
import Form from './components/sections/Form/Form'
import Footer from "./components/sections/Footer/Footer"

export default function App() {
  // Scroll Reveal for sections
  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
    }
  });

  return (
    <>
      <NavbarMobile />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Form />
      <Footer />
    </>
  )
}