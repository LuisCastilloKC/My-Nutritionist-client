//import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/Global';
import TopNav from './components/topNav/Topnav';
import Sidenav from './components/sideNav/Sidenav';
import { SideNavContainer } from './appElements'
import AppointmentRoute from './routes/appointments/AppointmentRoute';
import Appointment from './components/appointments/Appointment';
import LogIn from './routes/login/LogIn';
import HomeRoute from './routes/home/HomeRoute';


const App = () => {

    return ( 
        <div>
            <GlobalStyles />
            <TopNav />  
            <SideNavContainer>
                <Sidenav />              
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="appointments" element={<AppointmentRoute />} />
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