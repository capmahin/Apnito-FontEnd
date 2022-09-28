import React from "react";

const Clinet = ({ clinet }) => {
  const { name, img, description, comment } = clinet;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Parts" className="rounded-xl" />
      </figure>
      <div className="card-body items-right text-center">
        <h2 className="card-title text-3xl">{name}</h2>
        <p className="text-left text-2xl text-green-600">{description}</p>
        <h1 className="text-left text-xl text-primary">"Comment":</h1>
        <p className="text-justify ">{comment}</p>
      </div>
    </div>
  );
};

export default Clinet;
