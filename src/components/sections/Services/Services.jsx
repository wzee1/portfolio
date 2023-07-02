import React from "react"
import ServicesCard from "./ServicesCard"
import cardsData from "./cardsData"

export default function Services() {
   const cards = cardsData.map(card => {
      return <ServicesCard
         key={card.key}
         cardIconSrc={card.cardIconSrc}
         cardTitle={card.cardTitle}
         cardDesc={card.cardDesc}
      />
   })

   return (
      <section className="services container reveal" id="services">
         <h2 className="services-header">
            Customer-Centered Services<span>.</span>
         </h2>

         <div className="services-cards">
            <h1 className="services-bgtext">EMPOWER<span>.</span></h1>
            {cards}
         </div>
      </section>
   )
}