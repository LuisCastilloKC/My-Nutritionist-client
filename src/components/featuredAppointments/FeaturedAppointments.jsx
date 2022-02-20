import React from 'react';
import { Featured, FeauturedApoointmentItem, AppointmentProfilePic, 
        ProfileName, ProfileAge, ProfileContainer, 
        ProfileEditButton, ProfileFooterCointainer,
        AppointmentMiddleContainer, AppointmentPhoneNumber,
        AppointmentTime, AppointmentConsult } from './featuredAppointmentsElements';
import  { MoreVert }  from '@material-ui/icons';



const FeaturedAppointments = () => {

    return(
        <Featured>
            <FeauturedApoointmentItem>
                <ProfileContainer>
                    <AppointmentProfilePic src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/girl-2-512.png"></AppointmentProfilePic>
                    <ProfileName>Kay Smith <br /><ProfileAge>32 yrs</ProfileAge></ProfileName>
                    <ProfileEditButton><MoreVert /></ProfileEditButton>
                </ProfileContainer>
                <AppointmentMiddleContainer>
                    <AppointmentPhoneNumber>Tel. (917)854-2414 </AppointmentPhoneNumber>
                </AppointmentMiddleContainer>               
                <ProfileFooterCointainer> 
                    <AppointmentTime> 08:00 AM</AppointmentTime>
                    <AppointmentConsult>Consult</AppointmentConsult>
                </ProfileFooterCointainer>
            </FeauturedApoointmentItem>
            <FeauturedApoointmentItem>
                <ProfileContainer>
                    <AppointmentProfilePic src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-512.png"></AppointmentProfilePic>
                    <ProfileName>Kay Smith <br /><ProfileAge>32 yrs</ProfileAge></ProfileName>
                    <ProfileEditButton><MoreVert /></ProfileEditButton>
                </ProfileContainer>
                <AppointmentMiddleContainer>
                    <AppointmentPhoneNumber>Tel. (917)854-2414 </AppointmentPhoneNumber>
                </AppointmentMiddleContainer>               
                <ProfileFooterCointainer> 
                    <AppointmentTime> 08:00 AM</AppointmentTime>
                    <AppointmentConsult>Consult</AppointmentConsult>
                </ProfileFooterCointainer>
            </FeauturedApoointmentItem>
            <FeauturedApoointmentItem>
                <ProfileContainer>
                    <AppointmentProfilePic src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/girl-2-512.png"></AppointmentProfilePic>
                    <ProfileName>Kay Smith <br /><ProfileAge>32 yrs</ProfileAge></ProfileName>
                    <ProfileEditButton><MoreVert /></ProfileEditButton>
                </ProfileContainer>
                <AppointmentMiddleContainer>
                    <AppointmentPhoneNumber>Tel. (917)854-2414 </AppointmentPhoneNumber>
                </AppointmentMiddleContainer>               
                <ProfileFooterCointainer> 
                    <AppointmentTime> 08:00 AM</AppointmentTime>
                    <AppointmentConsult>Consult</AppointmentConsult>
                </ProfileFooterCointainer>
            </FeauturedApoointmentItem>
        </Featured>
    );
};

export default FeaturedAppointments;