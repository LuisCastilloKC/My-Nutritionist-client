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
                            <NavLink to="/mealplan">Meal Plan</NavLink>
                        </SideNavListItem>
                        <SideNavListItem>
                            <DateRange/>
                            <NavLink to="/appointment">Appointment</NavLink>
                        </SideNavListItem>
                        <SideNavListItem>
                            <Group />
                            <NavLink to="/client">Client</NavLink>
                        </SideNavListItem>
                   </SideNavList>
               </SideNavMenu>
               <SideNavMenu>
                   <SideNavTitle>Programs</SideNavTitle>
                   <SideNavList>
                        <SideNavListItem>
                            <WbSunny />
                            <NavLink to="/summer">Summer</NavLink>
                        </SideNavListItem>
                        <SideNavListItem>
                            <Apple />
                            <NavLink to="/food">Food</NavLink>
                        </SideNavListItem>
                        <SideNavListItem>
                            <Restaurant />
                            <NavLink to="/recipes">Recipes</NavLink>
                        </SideNavListItem>
                   </SideNavList>
               </SideNavMenu>
               <SideNavMenu>
                   <SideNavTitle>Register</SideNavTitle>
                   <SideNavList>
                        <SideNavListItem>
                            <Person />
                            <NavLink to="/login">LogIn</NavLink>
                        </SideNavListItem>
                        <SideNavListItem>
                            <PersonAdd />
                            <NavLink to="/signup">SignUp</NavLink>
                        </SideNavListItem>
                   </SideNavList>
               </SideNavMenu>
           </SideNavWrapper>
        </SideNav>
    );
};

export default Sidenav;