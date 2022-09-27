import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CarriesOpportunities = () => {
  const navigate = useNavigate();
  const navigateOpportunity = () => {
    navigate("/Opportunitie");
  };
  return (
    <div
      className="hero min-h-fit"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Carries Opportunities</h1>
          <p className="mb-5">
            Computer Systems Analysis. Data Entry Processing. Information
            Technology Management. Networking and Telecommunications. Software
            and Computer Media Applications.
          </p>
          <Link to="/Opportunitie" onClick={navigateOpportunity}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarriesOpportunities;
