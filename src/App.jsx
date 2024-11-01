import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Login from "./components/Login";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./components/Signup";
import { Button } from 'bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Navbar from './components/Navbar.jsX';
import Accommodation from './components/Accommodation'; 
import Droom from './components/Droom';
import Gallery from './components/Gallery';
import CustomDatePicker from './components/DatePicker';
import selectedDate from './components/DatePicker';
import handleDateChange from './components/DatePicker';
import DatePickerWithLayout from './components/DatePickerWithLayout';
import ProtectedRoute from "./components/ProtectedRoute";
import Troom from "./components/Troom";
import Broom from "./components/Broom";
import Hroom from "./components/Hroom";
import Proom from "./components/Proom";
// import Droom from "./components/Droom";
import AccNav from './components/AccNav';
import ForgotPassword from './components/forgotPassword';
import Footer from "./components/Footer";
import Create from "./components/Create";
import Contact from "./components/Contact";
import DatePicker from 'react-datepicker';

function App() {

  return (
    <div>
<UserAuthContextProvider>
     
              <Routes>

                <Route path="/" element=
                  {<Accommodation/>} 
                 />

                <Route path="Login" element={<Login />} />
                <Route path="Droom" element={<ProtectedRoute><Droom /></ProtectedRoute>} />
                <Route path="Troom" element={<ProtectedRoute><Troom /></ProtectedRoute>} />
                <Route path="Broom" element={<ProtectedRoute><Broom /></ProtectedRoute>} />
                <Route path="Hroom" element={<ProtectedRoute><Hroom /></ProtectedRoute>} />
                <Route path="Proom" element={<ProtectedRoute><Proom /></ProtectedRoute>} />
                <Route path="Create" element={<Create />} />

                <Route path="Gallery" element={<Gallery />} />
                <Route path="Contact" element={<Contact />} />

                <Route path="DatePicker" element={<ProtectedRoute><DatePicker /></ProtectedRoute>} />
                <Route path="Date" element={<ProtectedRoute><Date /></ProtectedRoute>} />
                <Route path= "DatePickerWithLayout" element={<DatePickerWithLayout></DatePickerWithLayout>} />
                 <Route path="SignUp" element={<Signup />} />
                 <Route path="Forgot-password" element={<ForgotPassword />} />
              </Routes>           
        
    
      </UserAuthContextProvider>


    </div>
  );
}

export default App;
