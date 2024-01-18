import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {

  return (
    <> 
    <Routes >
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/userDashboard" element={<UserDashboard />} />
    </Routes>
    </>
  )
}

export default App
