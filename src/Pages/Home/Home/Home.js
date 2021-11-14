import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <About></About>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;



/* 










*/