import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../styles/Header.css";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">KA.</div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Portfolios</li>
          <li>Testimonials</li>
          
        </ul>
        <button className="contact-button">Let’s Talk.</button>
        
          {menuOpen ? <AiOutlineClose className="menu-icon" onClick={toggleMenu} /> : <AiOutlineMenu className="menu-icon" onClick={toggleMenu} />}
        
       {

       menuOpen &&
        <ul className="nav-links ">
          <li>Home</li>
          <li>Services</li>
          <li>Portfolios</li>
          <li>Testimonials</li>
          <button className="cont-button">Let’s Talk.</button>
        </ul>
}
      </nav>

      <section className="hero">
        <div className="hero-text">
         
          <h1>HEY, I’M INEZA,
         A CREATIVE <span className="highlight">UI/UX</span>
          DESIGNER AND DEVELOPER.</h1>
        
          
          <p>⭐ Designer ⭐ Figma ⭐ Developer</p>
          <div className="hero-buttons">
          <button className="discuss-button">Want to discuss?</button>
             <button className="talk-button">Let’s Talk.</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/src/image/del.jpeg" alt="" />
        </div>
      </section>

      <section className="black-container">
        <nav className="black-links">
          <a href="#uiux">⭐UI/UX</a>
          <a href="#development">⭐Development</a>
          <a href="#productdesign">⭐Product Design</a>
          <a href="#socialmedia">⭐Social Media Design</a>
          <a href="#branding">⭐Branding</a>
        </nav>
      </section>
    </div>
  );
};

export default HeroSection;
