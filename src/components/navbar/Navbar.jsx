import React from 'react'
import './navbar.css'
import Logo from '../logo/Logo'
import { GoSignOut } from 'react-icons/go'

function Navbar() {

  const handleSignOut = () => {
      window.location.href = '/login'
  }

  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo />
        <div style={{display: 'flex', alignItems: 'center'}}>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/patients">Pacientes</a></li>
            <li><a href="/new">Novo Paciente</a></li>
            <button onClick={handleSignOut} className='signout-btn'><GoSignOut /></button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
