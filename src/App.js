import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './routes/Home'
import LogIn from './routes/LogIn'
import Appointments from './components/Appointments'
import SignUp from './routes/SignUp'
import Navigation from './components/Navigation';
import About from './routes/About'
import GlobalStyles from './styles/Global';
import TopNav from './components/topNav';
import Sidenav from './components/sideNav';
import { SideNavContainer } from './appElements'

const App = () => {

    return ( 
        <div className="App">
            <GlobalStyles />
            <TopNav />  
            <SideNavContainer>
                <Sidenav />
                
            </SideNavContainer>
            <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/about" element={<About />} />
                </Routes>
        </div>
        );
}
export default App;