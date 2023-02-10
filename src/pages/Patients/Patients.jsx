import React, { useState, useEffect } from 'react'
import './patients.css'
import Navbar from '../../components/navbar/Navbar'
import fetchPatients from '../../axios/config'
import { BiSearchAlt2 } from 'react-icons/bi'

function Patients() {

  const [patients, setPatients] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    const loadPatients = async () => {
      const res = await fetchPatients.get('/patient')
      setPatients(res.data)
    }

    loadPatients()
  }, [])

  return (
    <>
      <Navbar />
          <div className="search-bar">
            <div className="search-wrapper">
              <BiSearchAlt2 style={{fontSize: '1.3rem'}}/>
              <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar" />
            </div>
          </div>

          <div className="card-container">
            {patients.length === 0 && <p>Sem pacientes cadastrados.</p>}
            {patients.map((patient) => (
              <div className="card" key={patient._id}>
                <h2>{patient.name}</h2>
                <a href={`/patient/${patient._id}`}>clique para mais Informações</a>
              </div>
            ))}
          </div>
    </>
  )
}

export default Patients
