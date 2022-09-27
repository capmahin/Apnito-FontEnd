import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.newtechcomputersolutions.com/wp-content/uploads/2018/06/down.jpg"
          className="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About!!</h1>
          <p className="py-6">
            Computer mania is one of the top system integrator partners offering
            an entire range of IT integrated products and services. Incorporated
            in the year 1995, BRIPL has traversed an enriching journey of more
            than a decade and has emerged as one of the largest IT
            Infrastructure Solution provider supporting customers from small and
            medium businesses to blue chip clients and also providing a
            specialist service for the educational institutes.
          </p>
          <Link to="/about" onClick={navigateAbout}>
            {" "}
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
