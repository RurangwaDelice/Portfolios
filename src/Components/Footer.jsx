import { BsFacebook } from "react-icons/bs"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs"; 
import { CgMail } from "react-icons/cg"; 

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>KA.</h1>
      <div className="footer-links">
        <div>
        <a href="mailto:kazimahmad.business@gmail.com" className="footer-link">
         <CgMail /> kazimahmad.business@gmail.com </a>
        <a href="https://www.instagram.com/kazimahmad_22/" className="footer-link">
         <BsInstagram />https://www.instagram.com/kazimahmad_22/
        </a></div>

       <div> <a href="https://bit.ly/3St3BWn" className="footer-link">
         <AiFillLinkedin /> https://bit.ly/3St3BWn
        </a>
        <a href="https://www.facebook.com/kazimahmad.22/" className="footer-link">
         <BsFacebook /> https://www.facebook.com/kazimahmad.22/
        </a></div>
      </div>
    </div>
  );
};

export default Footer;