import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CarriesOpportunities from "./CarriesOpportunities";
import Products from "./Products";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Products></Products>
      <CarriesOpportunities></CarriesOpportunities>
    </div>
  );
};

export default Home;
