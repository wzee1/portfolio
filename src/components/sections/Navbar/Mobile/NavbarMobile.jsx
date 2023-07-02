import React from "react"

export default function NavbarMobile() {
   return (
      <>
         <a className="nav-logo-mobile" href="#">
            w <span>z e e</span>
         </a>

         <header className="nav-mobile">
            <input
               id="page-nav-toggle"
               className="main-navigation-toggle"
               type="checkbox"
            />
            <label htmlFor="page-nav-toggle">
               <svg className="icon--menu-toggle" viewBox="0 0 60 30">
                  <g className="icon-group">
                     <g className="icon--menu">
                        <path d="M 6 0 L 54 0" />
                        <path d="M 6 15 L 54 15" />
                        <path d="M 6 30 L 54 30" />
                     </g>
                     <g className="icon--close">
                        <path d="M 15 0 L 45 30" />
                        <path d="M 15 30 L 45 0" />
                     </g>
                  </g>
               </svg>
            </label>

            <nav className="main-navigation">
               <a className="nav-logo-mobile" id="open-phased" href="#">w z e e</a>
               <ul>
                  <li className="nav-links"><a href="#">Home</a></li>
                  <li className="nav-links"><a href="#services">Services</a></li>
                  <li className="nav-links"><a href="#portfolio">Portfolio</a></li>
                  <li className="nav-links"><a href="#contact">Get in Touch</a></li>
               </ul>
            </nav>
         </header>
      </>
   )
}