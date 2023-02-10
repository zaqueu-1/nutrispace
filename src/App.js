import { BrowserRouter, Route, Routes, Navigate, useParams } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NewPatient from './pages/NewPatient/NewPatient.jsx';
import Patient from './pages/Patient/Patient';
import Patients from './pages/Patients/Patients';

function App() {
  const { id } = useParams()

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewPatient />} />
          <Route path="/patient/:id" element={<Patient />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
