import React, { useState, useEffect } from 'react'
import './patients.css'
import nopatient from '../../images/no_patient.png'
import Navbar from '../../components/navbar/Navbar'
import fetchDb from '../../axios/config'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdPeopleAlt } from 'react-icons/md'
import { motion } from 'framer-motion'

function Patients() {

  const [patients, setPatients] = useState([])
  const [search, setSearch] = useState('')
  const [currentPatients, setCurrentPatients] = useState([])
  const [listIndex, setListIndex] = useState(1)

  useEffect(() => {
    const createdByToken = localStorage.getItem('createdBy')

    const loadPatients = async () => {
      const res = await fetchDb.get('/patient')
      setPatients(res.data.filter(patient => patient.createdBy === createdByToken))
      setCurrentPatients(res.data.filter(patient => patient.createdBy === createdByToken).slice(0,5))
    }

    loadPatients()
  }, [])

  const filteredPatients = currentPatients.filter((patient) => 
  patient.name.toLowerCase().includes(search.toLowerCase())
)

const prevList = () => {
  setListIndex(listIndex - 1)
  setCurrentPatients(patients.slice((listIndex-2)*5, (listIndex-1)*5))
}

const nextList = () => {
  setListIndex(listIndex + 1)
  setCurrentPatients(patients.slice(listIndex*5, (listIndex+1)*5))  
}

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
              <motion.div initial={{y:-20, opacity:0}} animate={{ y: 0, opacity:1 }} transition={{ ease: "easeOut", duration: 0.2 }} className="card" key={patient._id}>
                <h2><MdPeopleAlt /> {patient.name}</h2>
                <a href={`/patient/${patient._id}`}>clique aqui para mais Informações</a>
              </motion.div>
            ))}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="index-buttons">
                <button onClick={(e) => prevList(e)} disabled={listIndex === 1} className="prev-list">Anterior</button>
                <button onClick={(e) => nextList(e)} disabled={listIndex*5>=patients.length} className="next-list">Próxima</button>
              </motion.div>

          </div>
    </>
  )
}

export default Patients
