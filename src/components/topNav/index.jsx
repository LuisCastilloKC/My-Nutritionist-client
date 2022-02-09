import React from 'react';
import  { NotificationsNone }  from '@material-ui/icons';
import { TopNav, TopNavWrapper } from './topNavElements';


const Topnav = () =>{

    return(
        
        <TopNav>
            <TopNavWrapper>
                <div className='topLeft'>
                    <span className='logo'>My Nutritionist</span>
                </div>
                <div className='topRight'>
                    <div className='topnavIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                </div>
            </TopNavWrapper>
        </TopNav>
    );
};

export default Topnav;