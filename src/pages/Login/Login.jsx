import React, {useState} from 'react'
import animation from '../../images/space_animation.mp4'
import  Logo  from '../../components/logo/Logo'
import Signup from '../../components/signup/Signup'
import './login.css'
import { FcGoogle } from 'react-icons/fc'
import { MdLogin } from 'react-icons/md'
import { MdOutlineDoubleArrow } from 'react-icons/md'

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
    <div className="page-wrapper">
        <div className='video-container'>
            <video className='animation' autoPlay loop muted>
                <source src={animation} type='video/mp4' />
            </video>
            <div className="text-wrapper">
                <h2>Nutrição não é de <i>outro planeta</i></h2>
                <h3>Gerenciar seus pacientes também não!</h3>
                <h3>Explore a melhor plataforma do universo!</h3>
            </div>
        </div>

        <div className="login-container">
            <Logo />
            <form>
                    <input type='text' placeholder='Usuário' />
                    <input type='password' placeholder='Senha' />
                    <button className='login-btn' onClick={handleAuth} type='submit'><MdLogin /> Entrar</button>
                    <h5>Esqueci minha senha</h5>
            </form>

            <div className="divider" />

            <button className='google-login'><FcGoogle /> Continuar com Google</button>
            <p style={{color: 'white'}}>ou</p>
            <button className='signup-btn' onClick={(e) => handleOpenModal(e)}><MdOutlineDoubleArrow />Cadastrar-se</button>
        </div>
            {modalOpen && (
                    <Signup handleOpenModal={handleOpenModal} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                )}
    </div>
  )
}

export default Login
