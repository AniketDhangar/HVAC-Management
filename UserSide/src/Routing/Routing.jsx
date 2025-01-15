import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Pages/Home'
import About from '../Components/Pages/About'
import Contact from '../Components/Pages/Contact';
import Services from '../Components/Pages/Services';
import Blog from '../Components/Pages/Blog';
import AppointmentForm from '../Components/Pages/AppointmentForm';


function Routing() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path='/blogs' element={<Blog />} />    
      <Route path='/appointments' element={<AppointmentForm />} />
    </Routes>
  );
}

export default Routing;
