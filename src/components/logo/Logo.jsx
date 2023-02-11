import React from 'react'
import logo from '../../images/logo_main.png'

function Logo() {

  const goTo = () => {
    window.location.href = '/dashboard';
  }

  return (
    <>
      <img src={logo} alt="" style={{cursor: 'pointer'}} width='300px' onClick={goTo} />
    </>
  )
}

export default Logo
