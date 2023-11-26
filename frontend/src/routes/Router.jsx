import React from 'react';
import Home from '../pages/Home';
import Service from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import {Routes, Route} from 'react-router-dom';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';




const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:id' element={<DoctorDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/users/profile/me' element={<ProtectedRoutes allowedRoles={['patient']}> <MyAccount/> </ProtectedRoutes>}/>
        <Route path='/doctors/profile/me' element={<ProtectedRoutes allowedRoles={['doctor']}> <Dashboard/> </ProtectedRoutes>}/>
    </Routes>
  )
}

export default Router;