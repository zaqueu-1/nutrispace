import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [email, setEmail] = useState('')
    const [drive, setDrive] = useState('')
    const [tel, setTel] = useState('')
    const [plan, setPlan] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [feedback, setFeedback] = useState('')
    const [update, setUpdate] = useState('')
    const [active, setActive] = useState(true)
    const [gender, setGender] = useState('M')
    const [patient, setPatient] = useState('')
    const [patients, setPatients] = useState([])
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [createdBy, setCreatedBy] = useState('')

 
    return (
    <AppContext.Provider value={{
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
        patient,
        setPatient,
        patients,
        setPatients,
        active,
        setActive,
        gender,
        setGender,
        user,
        setUser,
        pass,
        setPass,
        confirmPass,
        setConfirmPass,
        userEmail,
        setUserEmail,
        createdBy,
        setCreatedBy,
     }} >
          {children}
        </AppContext.Provider>
      )
    }

const AppConsumer = () => useContext(AppContext)

export { AppContext, AppProvider, AppConsumer }