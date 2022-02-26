import React from 'react';
import FeaturedAppointments from '../../components/featuredAppointments/FeaturedAppointments';
import Appointment from '../../components/appointments/Appointment';
import { HomeCSS } from './homeElements';

const Home = () => {

    return(
        <HomeCSS>
            <FeaturedAppointments/>
            <Appointment />
        </HomeCSS>
    );
};

export default Home;