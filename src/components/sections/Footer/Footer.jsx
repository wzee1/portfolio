import React from "react"

export default function Form() {
   return (
      <footer>
         <div className="container">
            <div className="footer-icons">
               <a href="https://www.facebook.com/" target="_blank">
                  <img src="./src/assets/footer/facebook.svg" alt="Facebook Icon" />
               </a>

               <a
                  href="https://www.instagram.com/"
                  className="footer-icon--small"
                  target="_blank"
               >
                  <img
                     src="./src/assets/footer/instagram.svg"
                     alt="Facebook Icon"
                  />
               </a>

               <a href="https://www.github.com/wzee" target="_blank">
                  <img src="./src/assets/footer/github.svg" alt="Facebook Icon" />
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