import React from "react";
import './Banner.css';

const BannerItems = ({ slide }) => {
  const { image, id, next, previous } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="img-gradient">
        <img src={image} alt=" " srcSet="" className="w-full rounded-xl  " />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-5xl text-white font-bold">
          Affordable <br></br> Price For Car <br></br> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-2/4">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
        <button className="btn btn-outline btn-warning mr-4">
          Discover More
        </button>
        <button className="btn btn-outline btn-secondary">
          Latest Project
        </button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${previous}`} className="btn btn-circle me-4">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
