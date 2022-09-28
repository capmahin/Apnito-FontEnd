import React, { useEffect, useState } from "react";
import Opportunities from "./Opportunities";

const Opportunitie = () => {
  const [opportunitys, setOpportunity] = useState([]);

  useEffect(() => {
    fetch("Opportunitiy.json")
      .then((res) => res.json())
      .then((data) => setOpportunity(data));
  }, []);
  return (
    <div className="my-18">
      <div className="text-center">
        <h3 className="text-black text-xl font-bold uppercase">
          Carries Opportunities
        </h3>
        <h2 className="text-4xl">Opportunities</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 pt-6 px-5 py-5">
        {opportunitys.map((opportunity) => (
          <Opportunities
            key={opportunity._id}
            opportunity={opportunity}
          ></Opportunities>
        ))}
      </div>
    </div>
  );
};

export default Opportunitie;
