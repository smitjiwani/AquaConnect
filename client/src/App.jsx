import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {

  const loggedIn = true;

  return (
    <>
      {/* <Login  /> */}
      <Dashboard />
    </>
  )
}

export default App
