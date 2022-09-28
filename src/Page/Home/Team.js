import React from "react";

const Team = ({ team }) => {
  const { name, img, description, description1 } = team;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Parts" className="rounded-xl" />
      </figure>
      <div className="card-body items-right text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-left text-xl text-primary">{description}</p>
        <p className="text-left  ">{description1}</p>
      </div>
    </div>
  );
};

export default Team;
