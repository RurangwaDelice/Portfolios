import React from "react";
import { CiMobile2 } from "react-icons/ci"; 
import { AiOutlineInstagram, AiFillCode } from "react-icons/ai"; 
import { BiCubeAlt } from "react-icons/bi"; 
import { FaFigma } from "react-icons/fa"; 

import "../styles/PortfolioCard.css";

function Portfolios() {
  const portfolios = [
    {
      icon: <FaFigma />,
      title: "UI/UX Designing.",
      description:
      "We provide stunning designs for your UI/UX project, We can handle any project related to landing page designs, e-commerce designs, portfolio websites, business websites, and more as per your requirements.",
    },
    {
      icon: <BiCubeAlt />,
      title: "Graphic Designing.",
      description:
        "We provide amazing Graphic assets for projects such as social media posts designs, logo designs, business card designs, poster designs, thumbnail designs, and many more categories as per your requirements.",
    },
    {
      icon: <AiFillCode />,
      title: "Web Development.",
      description:
        "After designing the web apps or sites we also offer the services of web development for any kind of the website such as business landing pages, product related website development we can handle all the projects.",
    },
    {
      icon: <AiOutlineInstagram />,
      title: "Social Media Post Designing.",
      description:
        "Social media post designs are very important if you have a business and want to promote your business on social media, we are also providing the service of designing your social media posts for your business.",
    },
    {
      icon: <CiMobile2 />,
      title: "Mobile App UI/UX.",
      description:
        "with the service of web design and development, we are offering the service of mobile apps UI/UX designs if you are looking for someone who can create the layout and pages of your mobile app professionally we are here to handle this kind of project.",
    },
    {
      title: "Want your stunning designs",
      description:
        "If you want any kind of the listed services you can simply send us an email or leave a message on any social media platform..",
      buttonText: "Let’s Talk",
    },
  ];

  return (
    <div className="app">
      <h1 className="Portfolios-title">Portfolios.</h1>
      <p className="Portfolios-subtitle">
        Click on the cards to see my portfolios of related category.
      </p>
      <div className="portfolio-container">
        {portfolios.map((portfolio, index) => (
          <PortfolioCard
            key={index}
            icon={portfolio.icon}        
            title={portfolio.title}      
            description={portfolio.description} 
            buttonText={portfolio.buttonText}    
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioCard({ icon, title, description, buttonText }) {
  return (
    <div className="portfolio-card">
      
      <div className="portfolio-icon">{icon}</div>
      
      <h2>{title}</h2>
      <p>{description}</p>
      {buttonText && <button className="button">{buttonText}</button>}
    </div>
  );
}

export default Portfolios;
