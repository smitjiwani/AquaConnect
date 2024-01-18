import React from 'react'
import Dashboard from './Dashboard'
import UserDashboard from './UserDashboard'

const role = 'NGO'

const Home = () => {
    return (
        <>
            {role == 'NGO'
            ? <Dashboard />
            : <UserDashboard />
            }
        </>
    )
}

export default Home