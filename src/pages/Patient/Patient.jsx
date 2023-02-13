/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { AiOutlineMail } from 'react-icons/ai'
import { DiGoogleDrive } from 'react-icons/di'
import { FaWhatsapp } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import './patient.css'
import fetchDb from '../../axios/config'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

function Patient() {

  const [multiplier, setMultiplier] = useState(1)
  const [patient, setPatient] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const loadPatient = async () => {
      const res = await fetchDb.get(`/patient/${id}`)
      setPatient(res.data)
    }
    loadPatient()
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

    const handleReturn = () => {
      window.history.back();
    }

    const deletePatient = async () => {
      const createdByToken = localStorage.getItem("createdBy")

      if(patient.createdBy === createdByToken) {
        window.location.href = '/patients';
        await fetchDb.delete(`/patient/${id}`);
      } else {
        toast.error('Você não tem permissão para excluir este paciente!')
      }
    }

    const harrisM = ((88.362+(13.397*patient.weight)+(4.799*patient.height)-(5.677*patient.age))*multiplier).toFixed(2)
    const harrisF = ((447.593+(9.247*patient.weight)+(3.098*patient.height)-(4.330*patient.age))*multiplier).toFixed(2)
    const mifflinM = (((10*patient.weight)+(6.25*patient.height)-(5*patient.age)-161)*multiplier).toFixed(2)
    const mifflinF =  (((10*patient.weight)+(6.25*patient.height)-(5*patient.age)+5)*multiplier).toFixed(2)

  return (
    <>
      <Navbar />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
      <motion.div initial={{y: 50}} animate={{ y: 0 }} transition={{ ease: "easeOut", duration: 0.6 }} className="stats">
          <h2>Informações Pessoais</h2>
          <div className="contact">
            <a href={`mailto:${patient.email}`}><AiOutlineMail /></a>
            <a target='_blank' rel='noreferrer' href={`${patient.drive}`}><DiGoogleDrive /></a>
            <a target='_blank' rel='noreferrer' href={`https://wa.me/55${patient.tel}`}><FaWhatsapp /></a>
          </div>
          <p>Plano {patient.plan}</p><br/>
          <p>{patient.name}, {patient.gender === 'M' ? 'Masculino' : 'Feminino'}</p>
          <p>{patient.age} anos, {patient.height/100}m, {patient.weight}kg</p><br/>
          <p>Início: {formatDate(patient.start)}</p>
          <p>Término: {formatDate(patient.end)}</p><br/>
          <p>Feedback: {formatDate(patient.feedback)}</p>
          <p>Atualização: {formatDate(patient.update)}</p>
      </motion.div>

      <motion.div initial={{y:15}} animate={{y:0}} transition={{ ease: "easeOut", duration: 0.9 }} className="tools">
        <h2>Cálculos Energéticos</h2>
        <div className="multiplier-wrapper">
          <p>Atividade</p>
          <select name="multiplier" value={multiplier} onChange={(e) => setMultiplier(e.target.value)}>
            <option value={1}>TMB</option>
            <option value={1.2}>x1.2</option>
            <option value={1.4}>x1.4</option>
            <option value={1.6}>x1.6</option>
            <option value={1.8}>x1.8</option>
            <option value={2.0}>x2.0</option>
            <option value={2.2}>x2.2</option>
          </select>
        </div>

        <p>Harris & Benedict: {patient.gender === 'M' ? (harrisM) : patient.gender === 'F' ? (harrisF) : 0}kcal</p>
        <p>Mifflin St. Jeor: {patient.gender === 'M' ? (mifflinM) : patient.gender === 'F' ? (mifflinF) : 0}kcal</p>
      </motion.div>

      <div className="buttons-container">
        <button className="back-btn" onClick={(e) => handleReturn(e)}>Voltar</button>
        <button className="delete-btn" onClick={(e) => deletePatient(e)}><MdDeleteForever /></button>
      </div>
      </motion.main>
    </>
  )
}

export default Patient
