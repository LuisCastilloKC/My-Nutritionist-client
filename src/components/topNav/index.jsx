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
                    <ProfilePicture src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>         
                </TopRight>
            </TopNavWrapper>
        </TopNav>
    );
};

export default Topnav;