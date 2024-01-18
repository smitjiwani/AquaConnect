import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import UserDashboard from './UserDashboard'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const role = 'NGO'


    const navigate = useNavigate()

    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        // console.log(user)
        if (!user) {
            navigate("/login")
        }
        else{
            role = JSON.parse(localStorage.getItem("user")).role
        }
    }, [])
    return (
        <>
            {role == 'ngo'
                ? <Dashboard />
                : <UserDashboard />
            }
        </>
    )
}

export default Home