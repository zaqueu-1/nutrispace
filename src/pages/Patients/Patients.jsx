import React, { useState, useEffect } from 'react'
import './patients.css'
import nopatient from '../../images/no_patient.png'
import Navbar from '../../components/navbar/Navbar'
import fetchPatients from '../../axios/config'
import { BiSearchAlt2 } from 'react-icons/bi'
import { motion } from 'framer-motion'

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

  const filteredPatients = patients.filter((patient) => 
  patient.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <>
      <Navbar />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="search-bar">
            <div className="search-wrapper">
              <BiSearchAlt2 style={{fontSize: '1.3rem'}}/>
              <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar" />
            </div>
          </motion.div>

          <div className="card-container">
          {filteredPatients.length === 0 && search !== '' && <motion.img 
                                                              initial={{y:50, opacity:0}} 
                                                              animate={{ y: 0, opacity:1, transition: {duration: 0.6} }}
                                                              src={nopatient} 
                                                              alt='not-found' 
                                                              className='message' />}
            {filteredPatients.map((patient) => (
              <motion.div initial={{y:20, opacity:0}} animate={{ y: 0, opacity:1 }} transition={{ ease: "easeOut", duration: 0.2 }} className="card" key={patient._id}>
                <h2>{patient.name}</h2>
                <a href={`/patient/${patient._id}`}>clique aqui para mais Informações</a>
              </motion.div>
            ))}
          </div>
    </>
  )
}

export default Patients
