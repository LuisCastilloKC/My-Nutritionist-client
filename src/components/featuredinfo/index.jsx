import React from 'react';
import { Featured } from './featuredInfoElements';



const FeaturedInfo = () => {

    return(
        <Featured>
            <div className='feautedItem'>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind </span>
                </div>
                <span className='featuredSub'> Comperarted to last</span>
            </div>
            <div className='feautedItem'>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind </span>
                </div>
                <span className='featuredSub'> Comperarted to last</span>
            </div>
            <div className='feautedItem'>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind </span>
                </div>
                <span className='featuredSub'> Comperarted to last</span>
            </div>
        </Featured>
    );
};

export default FeaturedInfo