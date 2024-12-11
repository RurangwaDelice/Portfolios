import { BsCreditCard } from "react-icons/bs"; 
import React from "react";
import "../styles/Services.css";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  // List of all services
  const services = [
    { 
      icon: <BsCreditCard />, 
      title: "UI/UX Designing" 
    },
    { 
      icon: <BsCreditCard />,
      title: "App UI/UX" 
    },
    { 
      icon: <BsCreditCard />, 
      title: "Web Development" 
    },
    { 
      icon: <BsCreditCard />,
      title: "Graphic Designing" 
    },
    { 
      icon: <BsCreditCard />,
      title: "Product Designing" 
    },
    { 
      icon: <BsCreditCard />,
      title: "Social Media Posts" 
    },
  ];

  return (
    
    <section className="services">
      <h2 className="Services-title">Services.</h2>
      <p>Here are the services we are providing to you.</p>

      {/* Dynamically generate service cards */}
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>

      <button className="view-all">View All</button>
    </section>
   
  );
};

export default ServicesSection;
