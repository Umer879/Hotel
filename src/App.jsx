import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import TopHeader from "./Component/TopHeader/Header";
import Navbar from "./Component/Navbar/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Rooms from './Pages/Rooms'
import Appointment from "./Pages/Appointement";
import Contact from "./Pages/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <TopHeader />
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
