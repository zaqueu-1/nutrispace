/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import astronaut from '../../images/astronaut.png'
import  Logo  from '../../components/logo/Logo'
import Signup from '../../components/signup/Signup'
import './login.css'
import { FcGoogle } from 'react-icons/fc'
import { MdLogin } from 'react-icons/md'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { motion } from 'framer-motion'
import fetchDb from '../../axios/config'
import { toast } from 'react-toastify'
import { AppConsumer } from '../../contexts/AppContext'

function Login() {

    const [modalOpen, setModalOpen] = useState(false)

    const {         
        userEmail,
        setUserEmail,
        pass,
        setPass,
      } = AppConsumer();

    const handleOpenModal = (e) => {
        e.preventDefault()
        (modalOpen ? setModalOpen(false) : setModalOpen(true))

    }

    const handleAuth = async (e) => {
        e.preventDefault();
    
        const userCredentials = {
            userEmail,
            pass,
        };
    
        if (!userEmail || !pass) {
            toast.error('Preencha todos os campos!');
            return;
        }
    
        try {
            const res = await fetchDb.post('/login', userCredentials);
            const { token } = res.data;
            localStorage.setItem('createdBy', userEmail);
            localStorage.setItem('token', token);
            window.location.href = '/dashboard';

        } catch (error) {
            toast.error('Email ou senha incorretos!');
        }
    };
    
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="page-wrapper">
        <div className='astronaut-container'>
            <img src={astronaut} className='astronaut' alt='astronaut' />
            <motion.div initial={{y:20}} animate={{ y: 0}} transition={{ ease: "easeOut", duration: 0.8 }} className="text-wrapper">
                <h2>Nutrição não é de <i>outro planeta</i></h2>
                <h3>Gerenciar seus pacientes também não!</h3>
                <h3>Explore a melhor plataforma do universo!</h3>
            </motion.div>
        </div>

        <div className="login-container">
            <Logo />
            <motion.form initial={{y:20}} animate={{ y: 0}} transition={{ ease: "easeOut", duration: 1.2 }}>
                    <input type='text' value={userEmail} required onChange={(e) => setUserEmail(e.target.value)} placeholder='E-mail' />
                    <input type='password' value={pass} required onChange={(e) => setPass(e.target.value)} placeholder='********' />
                    <button className='login-btn' onClick={(e) => handleAuth(e)} type='submit'><MdLogin /> Entrar</button>
                     {/*<<h5>Esqueci minha senha</h5>*/}
            </motion.form>

            <div className="divider" />

            {/*<button className='google-login'><FcGoogle /> Continuar com Google</button>
            <p style={{color: 'white'}}>ou</p>*/}
            <button className='signup-btn' onClick={(e) => handleOpenModal(e)}><MdOutlineDoubleArrow />Cadastrar-se</button>
        </div>
            {modalOpen && (
                    <Signup handleOpenModal={handleOpenModal} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                )}
    </motion.div>
  )
}

export default Login
