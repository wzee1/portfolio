import React from "react"

export default function Services(props) {
   return (
      <div className="services-card">
         <img
            src={props.cardIconSrc}
            alt="Illustration"
            className="services-card--icon"
         />

         <h3 className="services-card--title">{props.cardTitle}</h3>
         <p className="services-card--desc">{props.cardDesc}</p>
      </div>
   )
}