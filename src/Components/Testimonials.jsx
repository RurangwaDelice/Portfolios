import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"; 
import { CgProfile } from "react-icons/cg"; 
import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vaseem Aziz.",
      feedback:
        "This young man is a great designer. Second time I am working with him. He will be creative with the brief. I am very pleased with the outcome. He also works very hard and listens to clients. I have been picky at times and he made the appropriate amendments. All the best, Kazim.",
    },
    {
      name: "Vaseem Aziz.",
      feedback:
        "Very hard worker. Listens and understands clients' needs. Uses his own initiative to get the job done. Well done.",
    },
    {
      name: " Qasim Ahmad. ",
      feedback:
        "Kazim has been my go-to graphic designer for a few months now and I am always satisfied with his work. He is very professional, quick to respond, and always delivers high-quality graphics. I highly recommend him!",
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>
      <p className="testimonials-subtitle">
        Here are some testimonials from our clients.
      </p>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-icon"><CgProfile /></div>
            <p className="testimonial-feedback">
           
            <RiDoubleQuotesL /> {testimonial.feedback} <RiDoubleQuotesR />
            
            </p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
