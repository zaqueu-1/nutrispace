/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import './newpatient.css'
import Navbar from '../../components/navbar/Navbar'
import { AppConsumer } from '../../contexts/AppContext'
import { toast } from 'react-toastify'
import fetchDb from '../../axios/config'
import { motion } from 'framer-motion'

function NewPatient() {

  const [section, setSection] = useState(1)

  useEffect(() => {
    const createdByToken = localStorage.getItem('createdBy');
    setCreatedBy(createdByToken);
  }, [])

  const handleSection = (mode) => {
   switch (mode) {
    case 'goToSection2':
      (name && age && gender && weight && height ? setSection(section + 1)
      : toast.error('Preencha todos os campos!'))
      break;
    case 'goToSection3':
      (tel && drive && email ? setSection(section + 1)
      : toast.error('Preencha todos os campos!'))
      break;
    case 'goToSection4':
      (plan && start && end ? setSection(section + 1)
      : toast.error('Preencha todos os campos!'))
      break;
    case 'back':
      setSection(section - 1);
      break;
    default:
      break;
   }
  }

  const {         
    name,
    setName,
    age,
    setAge,
    weight,
    setWeight,
    height,
    setHeight,
    email,
    setEmail,
    drive,
    setDrive,
    tel,
    setTel,
    plan,
    setPlan,
    start,
    setStart,
    end,
    setEnd,
    feedback,
    setFeedback,
    update,
    setUpdate,
    gender,
    setGender,
    active,
    createdBy,
    setCreatedBy,} = AppConsumer();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPatient = {
      name,
      age,
      weight,
      height,
      email,
      drive,
      tel,
      plan,
      start,
      end,
      feedback,
      update,
      active,
      gender,
      createdBy,
    }

    if (update && feedback) {
      const res = await fetchDb.post('/patient', newPatient)

      if (res.status === 201) {
        toast.success('Paciente cadastrado!')
        window.location.href = '/patients'
      }
    } else {
      toast.error('Preencha todos os campos!')
    }
  }

  return (
    <>
    <Navbar />
      <form className='new-patient-form'>
       {section === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="section">
            <div style={{display:'flex', gap:'.5rem', marginBottom: '.5rem'}} className="steps-container">
              <h3 className={section === 1 ? 'active' : ''}>1</h3>
              <h3 className={section === 2 ? 'active' : ''}>2</h3>
              <h3 className={section === 3 ? 'active' : ''}>3</h3>
              <h3 className={section === 4 ? 'active' : ''}>4</h3>
            </div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name='nome' value={name} min='3' max='80' required onChange={(e) => setName(e.target.value)} className='solo-input' placeholder="Paciente" />
              <div className="block">
                <div className="wrapper">
                  <label htmlFor="gender" >Gênero </label>
                  <select value={gender} id='gender' required onChange={(e) => setGender(e.target.value)}>
                    <option value='M'>Masculino</option>
                    <option value='F'>Feminino</option>
                  </select>
                </div>
                <div className="wrapper">
                  <label htmlFor="age" >Idade</label>
                  <input type="number" id='age' name='age' value={age} min='1' max='150' required onChange={(e) => setAge(e.target.value)} placeholder='25' />
                </div>
                <div className="wrapper">
                  <label htmlFor="weight">Peso</label>
                  <input type="number" id='weight' name='weight' minLength='2' max='500' required value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
                </div>
                <div className="wrapper">   
                  <label htmlFor="height">Altura</label>
                  <input type="number" id='height' name='height' minLength='3' min='100' max='400' required value={height} onChange={(e) => setHeight(e.target.value)} placeholder="170" /> 
                </div>
              </div>
            <div className="buttons-container">
              <button className="nextpage" type='submit' onClick={() => handleSection('goToSection2')}>Próximo</button>
            </div>
        </motion.div>
       )} 

       {section === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}  className="section">
            <div style={{display:'flex', gap:'.5rem', marginBottom: '.5rem'}} className="steps-container">
              <h3 className={section === 1 ? 'active' : ''}>1</h3>
              <h3 className={section === 2 ? 'active' : ''}>2</h3>
              <h3 className={section === 3 ? 'active' : ''}>3</h3>
              <h3 className={section === 4 ? 'active' : ''}>4</h3>
            </div>
              <label htmlFor="drive">Pasta do Drive</label>
              <input type="text" name='drive' value={drive} required onChange={(e) => setDrive(e.target.value)} placeholder="Pasta do Google Drive" />
              <div className="block">
                <div className="wrapper-w20">
                  <label htmlFor="tel">Telefone</label>
                  <input type="tel" id='tel'name='tel' minLength='8' value={tel} required onChange={(e) => setTel(e.target.value)} placeholder="21988888888" />
                </div>
                <div className="wrapper-w20">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id='email' name='email' value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="contato@mail.com" />
                </div>
              </div>
              <div className="buttons-container">
                <button className="prevpage" onClick={() => handleSection('back')}>Anterior</button>
                <button className="nextpage" onClick={() => handleSection('goToSection3')}>Próximo</button>
              </div>
            </motion.div>
       )}

      {section === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className='section'>
          <div style={{display:'flex', gap:'.5rem', marginBottom: '.5rem'}} className="steps-container">
            <h3 className={section === 1 ? 'active' : ''}>1</h3>
            <h3 className={section === 2 ? 'active' : ''}>2</h3>
            <h3 className={section === 3 ? 'active' : ''}>3</h3>
            <h3 className={section === 4 ? 'active' : ''}>4</h3>
          </div>
          <label htmlFor="plan">Tipo de Plano</label>
          <select name="plan" value={plan} required onChange={(e) => setPlan(e.target.value)}>
            <option value={'Mensal'}>Mensal</option>
            <option value={'Bimestra'}>Bimestral</option>
            <option value={'Trimestral'}>Trimestral</option>
            <option value={'Semestral'}>Semestral</option>
            <option value={'Anual'}>Anual</option>
          </select>
          <div className="block">
            <div className="wrapper-w20">
              <label htmlFor="start">Data de início</label>
              <input type="date" id='start' name='start' value={start} required onChange={(e) => setStart(e.target.value)} />
            </div>
            <div className="wrapper-w20">
              <label htmlFor="end">Data de conclusão</label>
              <input type="date" id='end' name='end' value={end} required onChange={(e) => setEnd(e.target.value)} />
            </div>
          </div>
          <div className="buttons-container">
            <button className="prevpage" onClick={() => handleSection('back')}>Anterior</button>
            <button className="nextpage" onClick={() => handleSection('goToSection4')}>Próximo</button>
          </div>
        </motion.div>
      )}

      {section === 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className='section'>
          <div style={{display:'flex', gap:'.5rem', marginBottom: '1rem'}} className="steps-container">
            <h3 className={section === 1 ? 'active' : ''}>1</h3>
            <h3 className={section === 2 ? 'active' : ''}>2</h3>
            <h3 className={section === 3 ? 'active' : ''}>3</h3>
            <h3 className={section === 4 ? 'active' : ''}>4</h3>
          </div>
          <div className="block">
            <div className="wrapper-w20">
              <label htmlFor="feedback">Coleta de feedback</label>
              <input type="date" id='feedback' name='feedback' value={feedback} required onChange={(e) => setFeedback(e.target.value)}  />
              <label htmlFor="update">Data de atualização</label>
              <input type="date" id='update' name='update' value={update} required onChange={(e) => setUpdate(e.target.value)}  />
            </div>
          </div>
          <div className="buttons-container">
            <button className="prevpage" onClick={() => handleSection('back')}>Anterior</button>
            <button type='submit' className="submit-btn" onClick={(e) => handleSubmit(e)}>Cadastrar</button>
          </div>
        </motion.div>
      )}

      </form>
    </>
  )
}

export default NewPatient