import React from 'react';
import  { NotificationsNone, Language, Settings }  from '@material-ui/icons';
import { Logo, ProfilePicture, TopIconBadge, TopNav, TopNavIconContainer, TopNavWrapper, TopRight } from './topNavElements';


const Topnav = () =>{

    return(
        
        <TopNav>
            <TopNavWrapper>
                <Logo>
                    <span className='logo'>My Nutritionist</span>
                </Logo>
                <TopRight>
                    <TopNavIconContainer>
                        <NotificationsNone />
                        <TopIconBadge>2</TopIconBadge>
                    </TopNavIconContainer>
                    <TopNavIconContainer>
                        <Language />
                        <TopIconBadge>2</TopIconBadge>
                    </TopNavIconContainer>
                    <TopNavIconContainer>
                        <Settings />
                    </TopNavIconContainer>
                    <ProfilePicture src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png" alt=""/>         
                </TopRight>
            </TopNavWrapper>
        </TopNav>
    );
};

export default Topnav;