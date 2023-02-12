import React  from 'react'
import './navbar.css'
import Logo from '../logo/Logo'
import { GoSignOut } from 'react-icons/go'
import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { FaWindowClose } from 'react-icons/fa'

function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('createdBy');
    window.location.href = '/login';
  };

  const toggleNavbar = () => {

    if (navbarOpen === true) {
      setNavbarOpen(false)
    } else {
      setNavbarOpen(true)
    }
  }
  
  return (
  <div className='navbar-wrapper'>
    <nav className='navbar'>
      <Logo />
      <div className='navbar-container' style={{display: 'flex', alignItems: 'center'}}>
          <button className='navbar-btn' onClick={toggleNavbar}>
            <span className='navbar-btn'><HiOutlineMenuAlt3 /></span>
          </button>
            <ul className={navbarOpen === false ? 'navbar-menu open' : 'navbar-menu'}>
            <button className='closenav-btn' onClick={toggleNavbar}><FaWindowClose /></button>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/patients">Pacientes</a></li>
              <li><a href="/new">Novo Paciente</a></li>
              <li><button onClick={handleSignOut} className='signout-btn'><GoSignOut /></button></li>
            </ul>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
