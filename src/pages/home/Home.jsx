import React from 'react';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import { HomeCSS } from './homeElements';

const Home = () => {

    return(
        <HomeCSS>
            <FeaturedInfo />
        </HomeCSS>
    );
};

export default Home;