import AmazonLogo from '../../assets/Logos/amazon-logo.png'
import React, { useState } from 'react'
import './navbar.css'
const Navbar = () => {
  let [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='h-[10%] w-screen bg-transparent box-border relative flex items-center justify-between px-[10%] py-[2%] '>
      <div><img src={AmazonLogo} alt="" className='h-[30%] w-[15%]' /></div>
     <button className='menu-button' onClick={()=>{setMenuOpen(!menuOpen)}}>{menuOpen?'✖' : '☰'}</button>
      <ul className={`flex w-[60%] h-auto items-left justify-end nav-items ${menuOpen?"menuButtons":""}`}>
        <li className='border-box h-[100%] w-[20%] p-[1%] bg-transaparent text-center'><a href="" className='text-center font-thin font-weight: 200'>About Us</a></li>
        <li className='border-box h-[100%] w-[20%] p-[1%] bg-transaparent text-center'><a href="" className='text-center font-thin font-weight: 500'>Services</a></li>
        <li className='border-box h-[100%] w-[20%] p-[1%] bg-transaparent text-center'><a href="" className='text-center font-thin font-weight: 500' >Courses</a></li>
        <li className='border-box h-[100%] w-[20%] p-[1%] bg-transaparent text-center'><a href="" className='text-center font-thin font-weight: 500'>Contact Us</a></li>
        <li className='border-box h-[100%] w-[20%] p-[1%] bg-orange-400 text-center'><a href="" className='text-center font-thin font-weight: 500'>Enroll Now</a></li>
      </ul>
    </nav>
  )
}

export default Navbar