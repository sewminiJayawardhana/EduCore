import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo1.png'

const Navbar = () => {
  const[sticky , setSticky]=useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true):setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`} >
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>Campus</li>
            <li>Reviews</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
