import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { AppConsumer } from '../../contexts/AppContext'
import { AiOutlineMail } from 'react-icons/ai'
import { DiGoogleDrive } from 'react-icons/di'
import { FaWhatsapp } from 'react-icons/fa'
import './patient.css'
import fetchPatients from '../../axios/config'

function Patient() {

  const [multiplier, setMultiplier] = useState(1)
  const { id } = useParams()
  const [patient, setPatient] = useState([])

  useEffect(() => {
    const loadPatient = async () => {
      const res = await fetchPatients.get(`/patient/${id}`)
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
      window.location.href = '/patients';
    }

  return (
    <>
      <Navbar />
      <div className="stats">
          <h2>Informações Pessoais</h2>
          <div className="contact">
            <a href={`mailto:${patient.email}`}><AiOutlineMail /></a>
            <a target='_blank' href={`${patient.drive}`}><DiGoogleDrive /></a>
            <a target='_blank' href={`https://wa.me/55${patient.tel}`}><FaWhatsapp /></a>
          </div>
          <p>Plano {patient.plan}</p><br/>
          <p>{patient.name}, {patient.gender === 'M' ? 'Masculino' : 'Feminino'}</p>
          <p>{patient.age} anos, {patient.height/100}m, {patient.weight}kg</p><br/>
          <p>Início: {formatDate(patient.start)}</p>
          <p>Término: {formatDate(patient.end)}</p><br/>
          <p>Feedback: {formatDate(patient.feedback)}</p>
          <p>Atualização: {formatDate(patient.update)}</p>
      </div>

      <div className="tools">
        <h2>Cálculos Energéticos</h2>
        <div className="multiplier-wrapper">
          <p>Multiplicador de Atividade</p>
          <select name="multiplier" value={multiplier} onChange={(e) => setMultiplier(e.target.value)}>
            <option value={1}>x1.0</option>
            <option value={1.2}>x1.2</option>
            <option value={1.4}>x1.4</option>
            <option value={1.6}>x1.6</option>
            <option value={1.8}>x1.8</option>
            <option value={2.0}>x2.0</option>
            <option value={2.2}>x2.2</option>
          </select>
        </div>

        <p>Harris & Benedict: {patient.gender === 'M' ? ((88.362+(13.397*patient.weight)+(4.799*patient.height)-(5.677*patient.age))*multiplier)
        : patient.gender === 'F' ? ((447.593+(9.247*patient.weight)+(3.098*patient.height)-(4.330*patient.age))*multiplier) : 0}kcal</p>
        <p>Mifflin St. Jeor: {patient.gender === 'M' ? (((10*patient.weight)+(6.25*patient.height)-(5*patient.age)-161)*multiplier) 
        : patient.gender === 'F' ? (((10*patient.weight)+(6.25*patient.height)-(5*patient.age)+5)*multiplier) : 0}kcal</p>
      </div>

      <div className="buttons-container">
        <button className="back-btn" onClick={(e) => handleReturn(e)}>Voltar</button>
      </div>
    </>
  )
}

export default Patient
