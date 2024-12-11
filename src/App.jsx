import React from "react";
import Header from "./Components/Header";
import Services from "./Components/Services";
import PortfolioCard from "./Components/PortfolioCard";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Services />
      <PortfolioCard/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;