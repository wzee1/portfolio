import React from "react"

export default function Form() {
   return (
      <div className="gradient-bg-flipped">
         <section className="contact container reveal" id="contact">
            <h2 className="contact-header">Let's Connect<span>.</span></h2>

            <form action="" className="contact-form">
               <div className="contact-form--right">
                  <div className="contact-form--name">
                     <label htmlFor="name">What's your name?</label>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Smith"
                     />
                  </div>

                  <div className="contact-form--email">
                     <label htmlFor="email">What's your email address?</label>
                     <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="johnsmith@gmail.com"
                     />
                  </div>
               </div>

               <div className="contact-form--right">
                  <div className="contact-form--message">
                     <label htmlFor="message"
                        >Please enter your message here:</label
                     >
                     <textarea id="message"></textarea>
                  </div>
               </div>

               <input
                  type="submit"
                  value="Submit"
                  className="button primary-button"
               />

               <lottie-player
                  src="https://lottie.host/b38078af-22ae-4db1-8236-49ee06cd1538/o3HYG2Stox.json"
                  background="transparent"
                  speed="0.7"
                  loop
                  autoplay
               ></lottie-player>
            </form>
         </section>
      </div>
   )
}