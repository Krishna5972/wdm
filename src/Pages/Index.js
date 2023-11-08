import React, { useState, useEffect } from 'react'; // Correctly import React, useState, and useEffect

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../style.css";
import backgroundImage1 from '../Images/img1.jpg';
import backgroundImage2 from '../Images/img2.jpg';

function Index() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Check if the user is logged in and get their role
    const userEmail = localStorage.getItem("userEmail");
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(userEmail !== null && userEmail !== "null");
    setUserRole(role);
  }, []);

  const welcomeMessage = isLoggedIn ? (
    `Welcome ${userRole}! Manage your academic progress here.`
  ) : (
    "Sign in to manage your academic progress."
  );


  return (
    <div>
    <Helmet>
      <title>Academic Program Homepage</title>
    </Helmet>

    {/* First Division */}
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage1})`, textAlign: "center" }}>
      <div className="login-message">
        <h1>Welcome Back!</h1>
        <p>{welcomeMessage}</p>
        <br/>
        {!isLoggedIn && <Link to="/login" className="login-button">Login</Link>}
      </div>
    </div>

     {/* Second Division */}
<div className="welcome-section">
  <h2>Welcome to the Educational Performance Management System (EPMS)</h2>
  <p>New here? Get started by exploring our modules.</p>
  <div className="module-links-container">
    <Link to="/academic_progress" className="module-card">Academic Progress</Link>
    <Link to="/courses" className="module-card">Courses</Link>
    <Link to="/mapping" className="module-card">Mapping</Link>
    <Link to="/exams_and_assessment" className="module-card">Exams and Assessment</Link>
    <Link to="/reporting_and_analysis" className="module-card">Reporting and Analysis</Link>
    <Link to="/feedback_and_communication" className="module-card">Feedback and Communication</Link>
  </div>
</div>


      {/* Third Division */}
      <div className="notice-section" style={{ backgroundImage: `url(${backgroundImage2})`, textAlign: "center" }}>
        <div className="notice-board">
          <h2>Latest Notices</h2>
          <ul>
            <li>Notice 1 - 19/29/2023</li>
            <li>Notice 2 - 10/13/2023</li>
            <li>Notice 3 - 11/27/2023</li>
            {/* Add more notices here */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
