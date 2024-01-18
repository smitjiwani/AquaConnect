import React from 'react'
import "../styles/UserDashboard.css"
import DashboardInfo from '../components/DashboardInfo'
import CreateRequest from '../components/CreateRequest'
import MyRequests from '../components/MyRequests';


const UserDashboard = () => {

  return (
    <div className="user__dashboard">
      <h1>UserDashboard</h1>
      <CreateRequest />
      <MyRequests />
      <DashboardInfo />
    </div>
  );
};

export default UserDashboard;