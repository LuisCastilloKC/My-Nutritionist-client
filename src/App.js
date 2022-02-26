//import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/Global';
import TopNav from './components/topNav/Topnav';
import Sidenav from './components/sideNav/Sidenav';
import { SideNavContainer } from './appElements'
import Home from './pages/home/Home';
import Appointment from './components/appointments/Appointment';


const App = () => {

    return ( 
        <div>
            <GlobalStyles />
            <TopNav />  
            <SideNavContainer>
                <Sidenav />
                <Home />              
            </SideNavContainer>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="appointments" element={<Appointment />} />
            </Routes>
               
        </div>
        );
}
export default App;