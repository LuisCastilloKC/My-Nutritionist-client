import React from 'react';
import { SideNav, SideNavWrapper, SideNavMenu, SideNavTitle, SideNavList, SideNavListItem } from './sideNavElements';
import { LineStyle, DateRange, Person  } from '@material-ui/icons'

const Sidenav = () => {

    return(
        <SideNav>
           <SideNavWrapper>
               <SideNavMenu>
                   <SideNavTitle>Dashboard</SideNavTitle>
                   <SideNavList>
                        <SideNavListItem active>
                            <LineStyle />
                            Meal Plan
                        </SideNavListItem>
                        <SideNavListItem>
                            <DateRange/>
                            Appointment
                        </SideNavListItem>
                        <SideNavListItem>
                            <Person />
                            Clients
                        </SideNavListItem>
                   </SideNavList>
               </SideNavMenu>
           </SideNavWrapper>
        </SideNav>
    );
};

export default Sidenav;