import React from "react";

const Contect = () => {
  return (
    <div className="text-black my-10">
      <h1 className="uppercase text-primary text-center text-4xl font-bold">
        Get in touch
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly my-5 text-center">
        <div>
          <i className="fa-solid fa-location-dot text-primary text-4xl my-5"></i>
          <h1 className="uppercase my-2 font-bold text-2xl">Address</h1>
          <p>Dhaka 1236, Shonir Akhra, Donia</p>
          <p>Bangladesh</p>
        </div>
        <div>
          <i className="fa-solid fa-phone text-primary text-4xl my-5"></i>
          <h1 className="uppercase my-2 font-bold text-2xl">Phone</h1>
          <p className="font-bold">Headquarter</p>
          <p>+01123456789</p>
          <p className="font-bold">Contact with the manager</p>
          <p>+88022241544</p>
          <p className="font-bold">Contact with one of our employee</p>
          <p>+882241654515</p>
        </div>
        <div>
          <i className="fa-solid fa-envelope text-primary text-4xl my-5"></i>
          <h1 className="uppercase my-2 font-bold text-2xl">Email</h1>
          <p>computermaina@gmail.com</p>
          <p>computermaina@facebook.com</p>
          <p>computermaina@icloud.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contect;
