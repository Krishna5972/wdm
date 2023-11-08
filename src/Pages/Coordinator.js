import { Link } from "react-router-dom";
import hubImage from "../Images/hub.png";
import evaluationImage from "../Images/evaluation.png";
import "./Instructor/instructor.css";

function Coordinator() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Program Coordinator Dashboard</h3>
      <div className="instructor_container">
        <Link to="/program_collaboration_hub" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Program Collaboration Hub</h2>
            <img
              src={hubImage}
              alt="Program Collaboration Hub"
              width="70"
              height="70"
            />
          </div>
        </Link>

        <div className="instructor_block">
          <h2>Course Content Enhancement</h2>
          <Link to="/reviewandimprovement">
            <button id="reviewandimprovement">Review and Improvement</button>
          </Link>
        </div>

        <Link to="/program_evaluation" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Program Evaluation</h2>
            <img
              src={evaluationImage}
              alt="Program Evaluation"
              width="100"
              height="100"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Coordinator;
