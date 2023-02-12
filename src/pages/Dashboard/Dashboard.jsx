import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { motion } from 'framer-motion'
import fetchPatients from '../../axios/config'
import './dashboard.css'

function Dashboard() {

  const [patients, setPatients] = useState([])
  const [currentPatients, setCurrentPatients] = useState([])
  const [listIndex, setListIndex] = useState(1)

  useEffect(() => {
    const createdByToken = localStorage.getItem('createdBy')

    const loadPatients = async () => {
      const res = await fetchPatients.get('/patient')
      setPatients(res.data.filter(patient => patient.createdBy === createdByToken))
      setCurrentPatients(res.data.filter(patient => patient.createdBy === createdByToken).slice(0,5))
    }

    loadPatients()
  }, [])

  const formatDate = (date) => {
    const newDate = new Date(date)

    let options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      timeZone: "UTC",
      hour12: false
    };

    let formattedDate = newDate.toLocaleString("pt-BR", options);
    return formattedDate
  }

  const goTo = (id) => {
    window.location.href = `/patient/${id}`;
  }

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
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>

        <motion.div initial={{x:-30}} animate={{ x: 0}} transition={{ ease: "easeOut", duration: 0.5 }} className="welcome">
          <h1>Olá, nutri! Tudo bom? </h1>
          <p>que tal dar uma olhadinha em seus próximos compromissos?</p> 
        </motion.div>

      <motion.div initial={{y:20}} animate={{ y: 0}} transition={{ ease: "easeOut", duration: 0.8 }} className="table-container">
        <table>
              <thead>
                <tr>
                  <th>Nome do Paciente</th>
                  <th>Próximo Feedback</th>
                  <th>Próxima Atualização</th>
                </tr>
              </thead>
              <tbody>
                {currentPatients
                  .sort((a, b) => new Date(a.feedback) - new Date(b.feedback))
                  .map((patient) => (
                    <tr key={patient._id}>
                      <td onClick={() => goTo(patient._id)}>{patient.name}</td>
                      <td>{formatDate(patient.feedback)}</td>
                      <td>{formatDate(patient.update)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="label">
              <p>Pacientes Cadastrados: {patients.length}</p>
              <div className="index-buttons">
                <button onClick={(e) => prevList(e)} disabled={listIndex === 1} className="prev-list">Anterior</button>
                <button onClick={(e) => nextList(e)} disabled={listIndex*5>=patients.length} className="next-list">Próxima</button>
              </div>
            </div>
        </motion.div>

      </motion.main>
    </>
  )
}

export default Dashboard