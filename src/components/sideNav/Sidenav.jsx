import React from 'react';
import { SideNav, SideNavWrapper, SideNavMenu, SideNavTitle, SideNavList, SideNavListItem, NavLink  } from './sideNavElements';
import { LineStyle, DateRange, Group, WbSunny, Apple, Restaurant, Home, PersonAdd, Person   } from '@material-ui/icons'

const Sidenav = () => {
    
    return(
        <SideNav>
           <SideNavWrapper>
               <SideNavMenu>
                   <SideNavTitle>Dashboard</SideNavTitle>
                   <SideNavList>
                        <SideNavListItem>
                            <Home />                       
                            <NavLink to="/">Home</NavLink>
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
                            <Group />
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
               <SideNavMenu>
                   <SideNavTitle>Register</SideNavTitle>
                   <SideNavList>
                        <SideNavListItem>
                            <Person />
                            LogIn
                        </SideNavListItem>
                        <SideNavListItem>
                            <PersonAdd />
                            SignUp
                        </SideNavListItem>
                   </SideNavList>
               </SideNavMenu>
           </SideNavWrapper>
        </SideNav>
    );
};

export default Sidenav;