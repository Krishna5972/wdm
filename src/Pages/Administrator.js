import React from "react";
import { Link } from "react-router-dom";
import systemViewImg from "../Images/systemview.png";
import reportGenerationImg from "../Images/reportgeneration.png";
import "./Instructor/instructor.css";

function Administrator() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Admin Dashboard</h3>
      <div className="instructor_container">
        <Link to="/system_overview" className="instructor_block-link">
          <div className="instructor_block">
            <h2>System Overview</h2>
            <img
              src={systemViewImg}
              alt="System Overview"
              width="70"
              height="70"
            />
          </div>
        </Link>

        <div className="instructor_block">
          <h2>Quality Assurance Tools</h2>
          <Link to="/curriculum">
            <button id="Curriculum">Curriculum Review</button>
          </Link>
          <Link to="/enhancement">
            <button id="Enhancement">Program Enhancement</button>
          </Link>
        </div>

        <div className="instructor_block">
          <h2>User Management</h2>
          <Link to="/addaccount">
            <button id="addaccount">Create User Account</button>
          </Link>
          <Link to="/editaccount">
            <button id="editaccount">Edit User Account</button>
          </Link>
          <Link to="/deactivateaccount">
            <button id="deactivateaccount">Deactivate User Account</button>
          </Link>
        </div>

        <Link to="/reporting_and_analysis" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Report Generation</h2>
            <img
              src={reportGenerationImg}
              alt="Report Generation"
              width="90"
              height="90"
            />
          </div>
        </Link>

        {/* <div className="instructor_block">
          <h2>Program and Active course</h2>
          <Link to="/update_program">
            <button id="Update">Update Program Details</button>
          </Link>
          <Link to="/modify_program">
            <button id="Modify">Modify Course Information</button>
          </Link>
        </div> */}

        {/* <div className="instructor_block">
          <h2>Customization</h2>
          <Link to="/settings">
            <button id="Settings">System Settings</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Administrator;
