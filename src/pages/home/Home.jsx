import React from 'react';
import FeaturedAppointments from '../../components/featuredAppointments/FeaturedAppointments';
import { HomeCSS } from './homeElements';

const Home = () => {

    return(
        <HomeCSS>
            <FeaturedAppointments/>
        </HomeCSS>
    );
};

export default Home;