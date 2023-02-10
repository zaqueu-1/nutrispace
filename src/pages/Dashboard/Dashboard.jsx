import React, { useEffect, useState } from 'react'
import Logo from '../../components/logo/Logo'
import Navbar from '../../components/navbar/Navbar'
import { motion } from 'framer-motion'
import fetchPatients from '../../axios/config'
import './dashboard.css'

function Dashboard() {

  const [patients, setPatients] = useState([])

  useEffect(() => {

    const loadPatients = async () => {
      const res = await fetchPatients.get('/patient')
      setPatients(res.data)
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


  return (
    <>
      <Navbar />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>

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
                {patients
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
            </div>
        </motion.div>

      </motion.main>
    </>
  )
}

export default Dashboard