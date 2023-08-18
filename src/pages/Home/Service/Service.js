import React, { useEffect, useState } from 'react';


const Service = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div>
                <h2>{services.length}</h2>
            {
               
            }
            </div>
        </div>
    );
};

export default Service;