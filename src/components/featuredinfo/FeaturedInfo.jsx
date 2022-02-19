import React from 'react';
import { Featured, FeautedItem, AppointmentProfilePic, ProfileName } from './featuredInfoElements';
import  { MoreVert }  from '@material-ui/icons';



const FeaturedInfo = () => {

    return(
        <Featured>
            <FeautedItem>
                <AppointmentProfilePic src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png"></AppointmentProfilePic>
                <ProfileName>Title Here</ProfileName>
                <span className='feautedTitle'><MoreVert /></span>
                <div className='featuredAppointmentContainer'>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind </span>
                </div>
                <span className='featuredSub'> Comperarted to last</span>
            </FeautedItem>
            <FeautedItem>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind </span>
                </div>
                <span className='featuredSub'> Comperarted to last</span>
            </FeautedItem>
            <FeautedItem>
                <span className='feautedTitle'>Title Here</span>
                <div className='featuredAppointmentContainer'>
                    <span className='featureAppointmentTotal'>5 appointment </span>
                    <span className='featureAppointmentPending'>5 Pendind </span>
                </div>
                <span className='featuredSub'> Comperarted to last</span>
            </FeautedItem>
        </Featured>
    );
};

export default FeaturedInfo