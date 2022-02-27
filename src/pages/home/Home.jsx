import React from 'react';
import FeaturedAppointments from '../../components/featuredAppointments/FeaturedAppointments';
import Appointment from '../../components/appointments/Appointment';
import { CenterBox } from '../../styles/centerBoxElements';

const Home = () => {

    return(
        <CenterBox>
            <FeaturedAppointments/>
            <Appointment />
        </CenterBox>
    );
};

export default Home;