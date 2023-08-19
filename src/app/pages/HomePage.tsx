import React from "react";
import Header from "../components/HeaderComponent/Header";
import HeroBanner from "../components/Banner/HeroBanner";
import Samples from "../components/SampleComponent/Samples";
import ComputerScreen from "../components/ComputerScreen/ComputerScreen";
import Services from "../components/ServicesSection/Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Samples />
      <ComputerScreen />
      <Services />
    </div>
  );
};

export default HomePage;
