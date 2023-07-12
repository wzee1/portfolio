import React from "react"
import facebook from "../../../assets/footer/facebook.svg"
import instagram from "../../../assets/footer/instagram.svg"
import github from "../../../assets/footer/github.svg"

export default function Form() {
   return (
      <footer>
         <div className="container">
            <div className="footer-icons">
               <a href="https://www.facebook.com/" target="_blank">
                  <img
                     src={facebook}
                     alt="Social Media Icon"
                  />
               </a>

               <a
                  href="https://www.instagram.com/"
                  className="footer-icon--small"
                  target="_blank"
               >
                  <img
                     src={instagram}
                     alt="Social Media Icon"
                  />
               </a>

               <a href="https://www.github.com/wzee1" target="_blank">
                  <img
                     src={github}
                     alt="Social Media Icon"
                  />
               </a>
            </div>

            <p className="footer-desc">
               © 2023 Zoltán Farkas<br />
               All Rights Reserved.<br />
               <a
                  href="https://www.hypestagency.com/"
                  target="_blank"
                  ><b>Hypest Agency</b></a
               >
            </p>
         </div>
      </footer>
   )
}