import React from 'react'
import pizzaLeft from "../assets/pizzaLeft.jpg"
import "../styles/contact.css"

function Contact() {
  return (
    <div className="contact">

      <div 
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
        >
        
      </div>

      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input 
            id="name" 
            name="name" 
            placeholder="Enter full name..." 
            type="text" 
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            name="email" 
            placeholder="Enter email..." 
            type="email" 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            rows="6" 
            placeholder="Enter message" 
            name="message"
            required></textarea>

          <button type="submit">Send</button>
        </form>

      </div>

    </div>
  )
}

export default Contact
