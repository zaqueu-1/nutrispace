import React, {useState} from 'react'
import astronaut from '../../images/astronaut.png'
import  Logo  from '../../components/logo/Logo'
import Signup from '../../components/signup/Signup'
import './login.css'
import { FcGoogle } from 'react-icons/fc'
import { MdLogin } from 'react-icons/md'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { motion } from 'framer-motion'

function Login() {

    const [modalOpen, setModalOpen] = useState(false)

    const handleOpenModal = (e) => {
        e.preventDefault()
        (modalOpen ? setModalOpen(false) : setModalOpen(true))
    }

    const handleAuth = (e) => {
        e.preventDefault()
        console.log('auth')
        window.location.href = '/dashboard'
    }


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
                    <input type='text' placeholder='Usuário' />
                    <input type='password' placeholder='Senha' />
                    <button className='login-btn' onClick={handleAuth} type='submit'><MdLogin /> Entrar</button>
                    <h5>Esqueci minha senha</h5>
            </motion.form>

            <div className="divider" />

            <button className='google-login'><FcGoogle /> Continuar com Google</button>
            <p style={{color: 'white'}}>ou</p>
            <button className='signup-btn' onClick={(e) => handleOpenModal(e)}><MdOutlineDoubleArrow />Cadastrar-se</button>
        </div>
            {modalOpen && (
                    <Signup handleOpenModal={handleOpenModal} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                )}
    </motion.div>
  )
}

export default Login
