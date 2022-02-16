import { Routes, Route } from 'react-router-dom'
import React from 'react';
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
                <Routes>

                </Routes>
        </div>
        );
}
export default App;