import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/Login.css"
import RadioButton from '../components/RadioButton'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState({ user: false, ngo: false })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, role);

    const data = { email: email, password: password, role: (role.ngo ? 'ngo' : 'user') };

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json());

    const user = {
      authtoken: response.authtoken,
      role: role
    }

    if (response.status === 'success') {
      if (role.ngo) {
        navigate("/dashboard")
      } else {
        navigate("/userDashboard")
      }
    } else {
      console.log(response);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
    else if (e.target.name === 'user') {
      setRole({ ngo: false, user: true })
    }
    else if (e.target.name === 'ngo') {
      setRole({ ngo: true, user: false })
    }
  }

  return (
    <section className='loginPage'>
      <div className='loginBox'>
        <h2>
          Sign in to your account
        </h2>
        <div className='radioBox'>
          <span>Sign in as :</span>
          <RadioButton
            name="user"
            id="userRadio"
            value="user"
            onChange={handleChange}
            checked={role.user}
            text="user"
          />
          <RadioButton
            name="ngo"
            id="teahcerRadio"
            value="ngo"
            onChange={handleChange}
            checked={role.ngo}
            text="ngo"
          />
        </div>
        <form action="#" onSubmit={handleSubmit} className='loginForm'>
          <div className='inputSection'>
            <label htmlFor="email" >Email</label>
            <input value={email} onChange={handleChange} type="email" name="email" id="email" placeholder="abc@eng.rizvi.edu.in" required="" />
          </div>
          <div className='inputSection'>
            <label htmlFor="password" >Password</label>
            <input value={password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" required="" />
          </div>
          <div>
            <div className='rememberBox'>
              <div >
                <input id="remember" aria-describedby="remember" type="checkbox" required="" />
              </div>
              <div >
                <label htmlFor="remember" >Remember me</label>
              </div>
            </div>
            <a href="#" >Forgot password?</a>
          </div>
          <div className='buttonContainer'>
            <button type="submit" className='loginButton' >Sign in</button>
          </div>
          <p >
            Don’t have an account yet? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login