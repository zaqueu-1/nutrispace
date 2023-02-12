import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NewPatient from './pages/NewPatient/NewPatient.jsx';
import Patient from './pages/Patient/Patient';
import Patients from './pages/Patients/Patients';
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new" element={<NewPatient />} />
            <Route path="/patient/:id" element={<Patient />} />
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
  );
}

export default App;
