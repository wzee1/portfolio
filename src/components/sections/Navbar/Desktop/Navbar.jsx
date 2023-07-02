import React from "react"
import PrimaryButton from "../../../other/PrimaryButton"

export default function NavbarMobile() {
   return (
      <header className="nav-desktop">
         <a href="#" className="nav-logo">w <span>z e e</span></a>

         <ul>
            <li className="nav-links"><a href="#">Home</a></li>
            <li className="nav-links"><a href="#services">Services</a></li>
            <li className="nav-links"><a href="#portfolio">Portfolio</a></li>
            <li className="nav-links">
               <PrimaryButton href="#contact" text="Get in Touch" />
            </li>
         </ul>
      </header>
   )
}