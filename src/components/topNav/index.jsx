import React from 'react';
import  { NotificationsNone, Language, Settings }  from '@material-ui/icons';
import { Logo, TopIconBadge, TopNav, TopNavIconContainer, TopNavWrapper, TopRight } from './topNavElements';


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
                        <TopIconBadge>2</TopIconBadge>
                    </TopNavIconContainer>
                </TopRight>
            </TopNavWrapper>
        </TopNav>
    );
};

export default Topnav;