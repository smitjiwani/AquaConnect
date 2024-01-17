import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';

function App() {

  const loggedIn = true;

  return (
    <> 
      {/* <Login  /> */}
      {<UserDashboard /> }
    </>
  )
}

export default App
