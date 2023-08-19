import React from "react";
import one from '../../../assets/images/products/1.png';
import { AiFillStar } from 'react-icons/ai';

const PopularProducts = () => {
  return (
    <div>
      <div>
        <p className="text-orange-600 font-semibold text-xl mt-3">Popular Products</p>
        <h2 className="text-5xl font-bold mt-3">Browse Our Products</h2>
        <p className="mt-3">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-5 mb-8">
        <figure className="px-10 pt-10">
          <img 
            src={one}
            alt="Shoes"
            srcSet=""
            className="rounded w-48 h-36"
          />
        </figure>
        <div className="card-body items-center text-center">
            <p className="flex text-warning"><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></p>
          <h2 className="card-title">Car Engine Plug</h2>
          <p className="text-red-600 font-bold">Price: $20.00</p>
         
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
