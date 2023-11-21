import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorDetails'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
    </Routes>
  )
}

export default Router
