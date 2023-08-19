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

        
      </div>
    
  );
};

export default Banner;
