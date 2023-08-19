import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-9">
        <figure><img src={service.img} srcSet='' alt='' /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.title}!</h2>
          <p className='text-red-500 text-start font-bold'>Price: ${service.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning text-white">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;