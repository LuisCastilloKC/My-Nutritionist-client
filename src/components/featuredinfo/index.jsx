import React from 'react';
import { PendingActions } from '@material-ui/icons'

const FeaturedInfo = () => {

    return(
        <div className='featured'>
            <div className='feautedItem'>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'></div>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind <PendingActions /></span>
            </div>
            <span className='featuredSub'> Comperarted to last mon</span>
        </div>
            <div className='feautedItem'>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'></div>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind <PendingActions /></span>
            </div>
            <span className='featuredSub'> Comperarted to last mon</span>
        </div>
            <div className='feautedItem'>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'></div>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind <PendingActions /></span>
            </div>
            <span className='featuredSub'> Comperarted to last mon</span>
        </div>
    );
};

export default FeaturedInfo