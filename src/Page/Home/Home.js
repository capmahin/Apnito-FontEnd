import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CarriesOpportunities from "./CarriesOpportunities";
import Clinets from "./Clinets";
import Products from "./Products";
import Services from "./Services";
import Teams from "./Teams";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Products></Products>
      <CarriesOpportunities></CarriesOpportunities>
      <Clinets></Clinets>
      <Teams></Teams>
    </div>
  );
};

export default Home;
