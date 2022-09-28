import React, { useEffect, useState } from "react";
import Clinet from "./Clinet";

const Clinets = () => {
  const [clinets, setClinets] = useState([]);

  useEffect(() => {
    fetch("clinet.json")
      .then((res) => res.json())
      .then((data) => setClinets(data));
  }, []);
  return (
    <div className="my-18">
      <div className="text-center">
        <h3 className="text-primary text-3xl font-bold uppercase  py-3">
          Our Clients Reviews
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3 pt-6 px-5 py-5">
        {clinets.map((clinet) => (
          <Clinet key={clinet._id} clinet={clinet}></Clinet>
        ))}
      </div>
    </div>
  );
};

export default Clinets;
