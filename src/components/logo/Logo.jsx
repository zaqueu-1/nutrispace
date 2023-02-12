import React from 'react'
import logo from '../../images/logo_main.png'
import './logo.css'

function Logo() {

  const goTo = () => {
    let token = localStorage.getItem('token')

    if (token) {
    window.location.href = '/dashboard';
    } else {
      window.location.href = '/login';
    }
  }

  return (
    <>
      <img src={logo} alt="" style={{cursor: 'pointer'}} width='300px' onClick={goTo} />
    </>
  )
}

export default Logo
