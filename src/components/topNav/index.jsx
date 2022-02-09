import React from 'react';
import  { NotificationsNone }  from '@material-ui/icons';
import { Logo, TopIconBadge, TopNav, TopNavIconContainer, TopNavWrapper } from './topNavElements';


const Topnav = () =>{

    return(
        
        <TopNav>
            <TopNavWrapper>
                <Logo>
                    <span className='logo'>My Nutritionist</span>
                </Logo>
                <div className='topRight'>
                    <TopNavIconContainer>
                        <NotificationsNone />
                        <TopIconBadge>2</TopIconBadge>
                    </TopNavIconContainer>
                </div>
            </TopNavWrapper>
        </TopNav>
    );
};

export default Topnav;