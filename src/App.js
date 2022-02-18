//import { Routes, Route } from 'react-router-dom'
import React from 'react';
import GlobalStyles from './styles/Global';
import TopNav from './components/topNav';
import Sidenav from './components/sideNav';
import { SideNavContainer } from './appElements'
import Home from './pages/home';


const App = () => {

    return ( 
        <div>
            <GlobalStyles />
            <TopNav />  
            <SideNavContainer>
                <Sidenav />
                <Home />              
            </SideNavContainer>
               
        </div>
        );
}
export default App;