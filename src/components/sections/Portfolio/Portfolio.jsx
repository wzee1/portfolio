import React from "react"
import PortfolioWebsites from "./PortfolioWebsites"
import PrimaryButton from "../../other/PrimaryButton"

export default function Portfolio() {
   return (
      <section className="portfolio container reveal" id="portfolio">
         <h2 className="portfolio-header">Check Out My Portfolio<span>.</span></h2>

         <div className="portfolio-websites--container">
            <PortfolioWebsites />
            <PortfolioWebsites />
            <PortfolioWebsites />
         </div>

         <PrimaryButton href="https://github.com/wzee" text="Check All" />
      </section>
   )
}