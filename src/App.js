import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NewPatient from './pages/NewPatient/NewPatient.jsx';
import Patient from './pages/Patient/Patient';
import { useState, useEffect } from "react";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewPatient />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
