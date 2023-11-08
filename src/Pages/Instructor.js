import { Link } from "react-router-dom";
import gradebookImg from "../Images/gradebook.png";
import communicationcenterImg from "../Images/communicationcenter.png";
import "./Instructor/instructor.css";

function Instructor() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>Instructor Dashboard</h3>
      </div>

      <div className="instructor_container">
        <Link to="/create_exam" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Exam Creation</h2>
            <button id="createExam" style={{margin: "10px 35% 0 35%;",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              border: "none",
              fontFamily: "Arial, sans-serif",
              cursor: "pointer",}}>Create Exam</button>
            {/* <button id="setExamCriteria">Set Exam Criteria</button> */}
          </div>
        </Link>

        <Link to="/courseManagement" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Course Management</h2>
          </div>
        </Link>

        <Link to="/gradebook" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Gradebook</h2>
            <img src={gradebookImg} alt="Gradebook" width="70" height="70" />
          </div>
        </Link>

        {/* <Link to="/communication" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Communication Center</h2>
            <img
              src={communicationcenterImg}
              alt="Communication Center"
              width="90"
              height="90"
            />
          </div>
        </Link>

        <Link to="/objective" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Program Objectives</h2>
          </div>
        </Link>

        <Link to="/analytics" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Analytics</h2>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Instructor;
