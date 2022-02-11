import React from 'react';
import { SideNav, SideNavWrapper, SideNavMenu } from './sideNavElements';
import { LineStyle, DateRange, Person  } from '@material-ui/icons'

const Sidenav = () => {

    return(
        <SideNav>
           <SideNavWrapper>
               <SideNavMenu>
                   <h3 className='sideNavTitle'>Dashboard</h3>
                   <ul className='sideNavList'>
                        <li className='sideNavListItem'>
                            <LineStyle />
                            Meal Plan
                        </li>
                        <li className='sideNavListItem'>
                            <DateRange/>
                            Appointment
                        </li>
                        <li className='sideNavListItem'>
                            <Person />
                            Clients
                        </li>
                   </ul>
               </SideNavMenu>
           </SideNavWrapper>
        </SideNav>
    );
};

export default Sidenav;