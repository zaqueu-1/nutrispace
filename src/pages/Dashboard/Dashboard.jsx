import React from 'react'
import Logo from '../../components/logo/Logo'
import Navbar from '../../components/navbar/Navbar'

function Dashboard() {
  return (
    <>
      <Navbar />
      <button>Pacientes Cadastrados</button>
      <button>Adicionar Paciente</button>
    </>
  )
}

export default Dashboard