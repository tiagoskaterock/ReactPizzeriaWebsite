import React from 'react'
import multiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/about.css"
import AboutContent from "../helpers/AboutContent"

function About() {
  return (
    <div className="about">
      <div 
        className="aboutTop" 
        style={{ backgroundImage: `url(${multiplePizzas})` }}></div>
      <div className="aboutBottom">
        <h1>{ AboutContent.title }</h1>
        <p>{ AboutContent.description }</p>
      </div>
    </div>
  )
}

export default About
