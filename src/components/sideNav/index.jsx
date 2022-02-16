import React from 'react';
import { SideNav, SideNavWrapper, SideNavMenu, SideNavTitle, SideNavList, SideNavListItem  } from './sideNavElements';
import { LineStyle, DateRange, Person, WbSunny, Apple, Restaurant, Home   } from '@material-ui/icons'

const Sidenav = () => {
    
    return(
        <SideNav>
           <SideNavWrapper>
               <SideNavMenu>
                   <SideNavTitle>Dashboard</SideNavTitle>
                   <SideNavList>
                        <SideNavListItem>
                            <Home />                       
                            Home
                        </SideNavListItem>
                        <SideNavListItem>
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
               <SideNavMenu>
                   <SideNavTitle>Programs</SideNavTitle>
                   <SideNavList>
                        <SideNavListItem>
                            <WbSunny />
                            Summer
                        </SideNavListItem>
                        <SideNavListItem>
                            <Apple />
                            Foods
                        </SideNavListItem>
                        <SideNavListItem>
                            <Restaurant />
                            Recipes
                        </SideNavListItem>
                   </SideNavList>
               </SideNavMenu>
           </SideNavWrapper>
        </SideNav>
    );
};

export default Sidenav;