import React from "react";
import person from '../../../../assets/images/about_us/person.jpg';
import parts from '../../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
            <img src={person} srcSet="" className=" w-4/5 h-full rounded-lg shadow-2xl" alt="" srcset="" />
            <img src={parts} srcSet="" className="max-w-sm right-5 rounded-xl  shadow-2xl absolute top-1/2 w-3/5" alt="" srcset="" />
         
        </div>
        <div className="w-1/2">
          <p className="text-orange-600 font-semibold text-start">About Us</p>
          <h1 className="text-5xl font-bold text-start mt-5">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
            <br />
            <br/>
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-orange-600 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
