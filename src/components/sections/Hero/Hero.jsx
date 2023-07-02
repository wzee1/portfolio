import React from "react"
import PrimaryButton from "../../other/PrimaryButton"
import arrow from "../../../assets/hero/Arrow.svg"
import scrollDown from "../../../assets/hero/Scroll Down.svg"

export default function Hero() {

   // Pauses the animation
   function heroStyleChange() {
      const heroSection = document.querySelector(".hero")
      heroSection.style.opacity = "1"
      heroSection.style.animationPlayState = "paused"
   }

   function onLoadChange() {
      setTimeout(heroStyleChange, 1500)
   }

   // Bug Fix
   function updateHorizontalMargin() {
      const hero = document.querySelector('.hero');
      const computedStyle = getComputedStyle(hero);
      const horizontalMargin = computedStyle.marginInlineStart;
      document.documentElement.style.setProperty('--horizontal-margin', horizontalMargin);
   }

   return (
      <div className="gradient-bg">
         <section className="hero container reveal-hero"
                  onLoad={() => onLoadChange()}
                  onResize={() => updateHorizontalMargin()}
         >
            <div className="hero-left">
               <h1 className="hero-header">
                  <span className="hero-header--underline">Empower</span> Your
                  Business with a Website that <b>Attracts</b> and
                  <b>Converts</b><span className="hero-header--dot">.</span>
               </h1>

               <p className="hero-desc">
                  Unleash the Potential of Digital Presence to Drive Customer
                  Growth.
               </p>

               <div className="hero-buttons">
                  <PrimaryButton href="#contact" text="Get in Touch" />
                  <a href="#portfolio" className="secondary-button"
                     >Explore My Work
                     <img src={arrow} alt="Click to Explore"
                  /></a>
               </div>
            </div>

            <lottie-player
               src="https://assets5.lottiefiles.com/packages/lf20_uzvwjpkq.json"
               background="transparent"
               speed="0.25"
               loop
               autoplay
               className="hero-img"
            ></lottie-player>

            <img
               src={scrollDown}
               alt="Scroll Down"
               className="scroll-down"
            />
         </section>
      </div>
   )
}