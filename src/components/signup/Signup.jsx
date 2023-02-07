import React, {useEffect, useRef} from 'react'
import './signup.css'
import { FaWindowClose } from 'react-icons/fa'

function Signup({handleOpenModal, modalOpen, setModalOpen}) {

    const modalRef = useRef(null);

    useEffect(() => {
        if (modalOpen) {
          document.addEventListener("click", handleClickOutside);
        } else {
          document.removeEventListener("click", handleClickOutside);
        }
      
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [modalOpen]);
      

    function handleClickOutside(event) {
        if (event.target === modalRef.current) {
          setModalOpen(false);
        }
      }
      
  return (
    <div ref={modalRef} className='modal-container'>
      <form className="signup-container">
        <FaWindowClose className='close-btn' onClick={handleOpenModal}/>
        <h1 style={{color: 'white'}}>Cadastre-se</h1>
            <input className='signup-input' type='text' placeholder='Nome' />
            <input className='signup-input' type='text' placeholder='E-mail' />
            <input className='signup-input' type='password' placeholder='Senha' />
            <input className='signup-input' type='password' placeholder='Confirmar senha' />
            <button className='signup-btn' type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Signup
