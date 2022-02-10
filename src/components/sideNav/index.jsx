import React from 'react';
import { SideNav } from './sideNavElements';
import { LineStyle } from '@material-ui/icons'

const Sidenav = () => {

    return(
        <SideNav>
           <div className='sideNavWrapper'>
               <div className="sideNavMenu">
                   <h3 className='sideNavTitle'>Dashboard</h3>
                   <ul className='sideNavList'>
                        <li className='sideNavListItem'>
                            <LineStyle />
                            Meal Plan
                        </li>
                        <li className='sideNavListItem'>
                            <LineStyle />
                            Appointment
                        </li>
                        <li className='sideNavListItem'>
                            <LineStyle />
                            Clients
                        </li>
                   </ul>
               </div>
           </div>
        </SideNav>
    );
};

export default Sidenav;