import { Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react';
import Home from './routes/Home'
import LogIn from './routes/LogIn'
import Appointments from './components/Appointments'
import SignUp from './components/SignUp'
import Navigation from './components/Navigation';

const App = () => {

    return ( 
        <div className="App">
            <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/appointments" element={<Appointments />} />
                </Routes>
        </div>
        );
}
export default App;