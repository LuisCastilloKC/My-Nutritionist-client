//import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/Global';
import TopNav from './components/topNav/Topnav';
import Sidenav from './components/sideNav/Sidenav';
import { SideNavContainer } from './appElements'
import Home from './pages/home/Home';
import Appointment from './components/appointments/Appointment';
import LogIn from './pages/login/LogIn';


const App = () => {

    return ( 
        <div>
            <GlobalStyles />
            <TopNav />  
            <SideNavContainer>
                <Sidenav />              
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="appointments" element={<Appointment />} />
                <Route path="clients" element={<Appointment />} />
                <Route path="login" element={<LogIn />} />
                <Route path="signup" element={<Appointment />} />
                <Route path="mealplan" element={<Appointment />} />
            </Routes>
            </SideNavContainer>

               
        </div>
        );
}
export default App;