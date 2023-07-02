import React from "react"

export default function PrimaryButton(props) {
   return (
      <a
         href={props.href}
         className="button primary-button portfolio-button"
         target={props.target}
      >
         {props.text}
      </a>
   )
}