import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import BannerItems from "./BannerItems";


const Banner = () => {
  const bannerData=[
    {
      id:1,
      image:img1,
      previous:4,
      next:2
      
    },
    {
      id:2,
      image:img2,
      previous:1,
      next:3
      
    },
    {
      id:3,
      image:img3,
      previous:2,
      next:4
      
    },
    
    {
      id:4,
      image:img4,
      previous:3,
      next:1
      
    }
  
  ]
  return (
    
      <div className="carousel w-full">

        {
          bannerData.map(slide=><BannerItems key={slide.id} slide={slide}></BannerItems>)
        }

        {/* <BannerItems image={img1}></BannerItems> */}
        
        {/* <div id="slide1" className="carousel-item relative w-full">

          <div className="img-gradient">
          <img src={img1} alt=" " className="w-full " />

          </div>
          
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className="text-5xl text-white font-bold">Affordable <br></br> Price For Car <br></br> Servicing</h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-2/4">
           <p className="text-white text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
          <button className="btn btn-outline btn-warning mr-4">Discover More</button>
          <button className="btn btn-outline btn-secondary">Latest Project</button>
          </div>


          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle me-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    
  );
};

export default Banner;
