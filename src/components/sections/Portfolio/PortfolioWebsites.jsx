import React from "react"
import webData from "./webData"

export default function PortfolioWebsites() {
   const logos = webData.map(web => {
      return (
         <a
            href={web.href}
            target="_blank"
            className="portfolio-website"
            key={web.key}
         >
            <img src={web.imgSrc} alt={web.imgAlt} />
         </a>
      )
   })
   
   return (
      <div className="portfolio-websites">
         {logos}
      </div>
   )
}