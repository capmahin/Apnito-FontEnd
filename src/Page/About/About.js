import React from "react";

const About = () => {
  return (
    <div className="py-6">
      <h1 className="text-purple-700 text-center font-bold uppercase text-4xl py-4">
        About Us!!
      </h1>
      <div className="hero py-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media.suara.com/pictures/970x544/2022/04/13/40904-asus-rog-strix-scar-15-g533z.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">OUR MISSION!!</h1>
            <p className="py-6 text-xl">
              Unite gamers of diverse backgrounds to achieve their potential
              together in play. Through innovative technology and exceptional
              experiences, we can push boundaries to create a world without
              limits. As a major player in the IT industry, ASUS' corporate
              mission is to provide innovative IT solutions that empower people
              and businesses to reach their full potential.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero "
        style={{
          backgroundImage: `url("https://cdn.gsmarena.com/imgroot/news/18/10/asus-rog-phone-wallpapers/-1024x768m/gsmarena_011.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-yellow-500">
              Innovation!!!
            </h1>
            <p className="mb-5">
              Established in 1989, ASUS is a multinational company known for the
              world's best motherboards and high-quality personal computers,
              monitors, graphics cards, routers and other technology solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://dlcdnwebimgs.asus.com/gain/A03D9DCF-D601-4C1E-B20E-85AD8DF47788/w750/h470"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">!!ROG!!</h1>
            <p className="py-6 text-xl">
              ROG was founded with the goal of creating the world's most
              powerful and versatile gaming laptops. Our premium devices elevate
              gaming experiences with best-in-class displays, top tier graphics
              and innovative cooling solutions to take performance to new
              heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
