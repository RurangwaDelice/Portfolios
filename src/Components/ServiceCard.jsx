import React from "react";
import "../styles/Services.css";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
    </div>
  );
};

export default ServiceCard;
