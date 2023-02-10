import React from 'react'
import './navbar.css'
import Logo from '../logo/Logo'
import { GoSignOut } from 'react-icons/go'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo />
        <div style={{display: 'flex', alignItems: 'center'}}>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/patients">Pacientes</a></li>
            <li><a href="/new">Novo Paciente</a></li>
            <button className='signout-btn'><GoSignOut /></button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
