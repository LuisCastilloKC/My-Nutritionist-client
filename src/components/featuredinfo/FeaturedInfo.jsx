import React from 'react';
import { Featured, FeautedItem, AppointmentProfilePic, ProfileName, ProfileAge, ProfileContainer, ProfileEditButton, ProfileFooterCointainer } from './featuredInfoElements';
import  { MoreVert }  from '@material-ui/icons';



const FeaturedInfo = () => {

    return(
        <Featured>
            <FeautedItem> {/*  wrapper */}
            <ProfileContainer>
                <AppointmentProfilePic src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png"></AppointmentProfilePic>
                <ProfileName>Kay Smith <br /><ProfileAge>32 yrs</ProfileAge></ProfileName>
                <ProfileEditButton><MoreVert /></ProfileEditButton>
            </ProfileContainer>
                <div className='featuredAppointmentContainer'>
                    <span className='featureAppointmentTotal'>Tel. (917)854-2414 </span>
                </div>               
                <ProfileFooterCointainer> 
                    <span className='featuredSub'> 08:00 AM</span>
                    <span className='featuredSub'>Consult</span>
                </ProfileFooterCointainer>
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