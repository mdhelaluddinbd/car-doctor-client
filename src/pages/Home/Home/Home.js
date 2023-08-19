import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Service from '../Service/Service';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;