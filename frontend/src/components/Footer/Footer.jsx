import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from "react-icons/ri";
import {AiFillGithub, AiOutlineInstagram} from "react-icons/ai";



const quickLinks01 = [
  {
    path: '/home',
    display: "Home",
  },

  {
    path: '/',
    display: "Find a doctor",
  },

  {
    path: '/',
    display: "Services",
  },

  {
    path: '/',
    display: "Contact",
  },


]



const quickLinks02 = [
  {
    path: '/find-a-doctor',
    display: "Find a Doctor",
  },

  {
    path: '/',
    display: "Request an  Appointment",
  },

  {
    path: '/',
    display: "Find a Location",
  },

  {
    path: '/',
    display: "Get a Optiom",
  },


]




const quickLinks03 = [
  {
    path: '/',
    display: "Donate",
  },

  {
    path: '/contact',
    display: "Contact Us",
  },


]


const socialLinks = [
  {
    path: '/',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>,
  },

  {
    path: '/',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>,
  },

  {
    path: '/',
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5'/>,
  },

]






const Footer = () => {

  const year = new Date().getFullYear();


  return (

    <footer className='pb-16 pt-10'>
       <div className='container'>
     <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
      <div>
        <img src={logo} alt="logo" />
        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright © {year} developed by Anurag p all right reserved.
        </p>
        <div className='flex items-center gap-3 mt-4'>
          {
            socialLinks.map((link,index) => (
              <Link className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
               justify-center group hover:bg-primaryColor hover:border-none' to={link.path} key={index}>
              {link.icon}
              </Link>
            ))
          }
        </div>
      </div>


      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>

        <ul>
          {
            quickLinks01.map((item,index) => (
              <li key={index} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display}</Link></li>
            ))
          }
        </ul>
      </div>


      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to :</h2>

        <ul>
          {
            quickLinks02.map((item,index) => (
              <li key={index} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display}</Link></li>
            ))
          }
        </ul>
      </div>




      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>

        <ul>
          {
            quickLinks03.map((item,index) => (
              <li key={index} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-textColor' to={item.path}>{item.display}</Link></li>
            ))
          }
        </ul>
      </div>


     </div>
     </div>
    </footer>
   
  )
}

export default Footer;
