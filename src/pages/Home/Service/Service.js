import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FcCalendar } from 'react-icons/fc';
import { FaPhoneVolume } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-16">
      <div>
        <div>
          <p className="text-orange-600 font-semibold text-xl mt-3 ">Services</p>
          <h1 className="text-5xl font-bold mt-3">Our Service Area</h1>
          <p className="mt-3 ">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center mt-9 ">
        {services.map((service) => <ServiceCard key={service.id} service={service}></ServiceCard>)}
      </div>

      <button className="btn btn-warning text-white font-bold mt-10 mb-10">More Services</button>


      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-around justify-items-center gap-4 bg-black text-white pt-8 pb-8 rounded-md">
        <div className="flex ">
          <FcCalendar className="text-3xl mr-3"></FcCalendar> <div>
            <p>We are open monday-friday</p>
            <h2>7:00 am - 9:00 pm</h2>
          </div>
        </div>

        <div className="flex ">
          <FaPhoneVolume className="text-3xl mr-3"></FaPhoneVolume> <div>
            <p>Have a question?</p>
            <h2>+2546 251 2658</h2>
          </div>
        </div>

        <div className="flex ">
          <MdLocationPin className="text-3xl mr-3 text-red-600"></MdLocationPin> <div>
            <p>Need a repair? our address</p>
            <h2>Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
