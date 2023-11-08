import { Link } from "react-router-dom";
import officerImage from "../Images/officer.jpg";
import recomImage from "../Images/recom.jpg";
import resourceImage from "../Images/resource.jpg";

function QualityAssuranceTool() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Quality Assuarance Officer Tool</h3>
      <div className="instructor_container">
        <Link to="/officer_dashboard" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Quality Assuarance Officer Dashboard</h2>
            <img src={officerImage} alt="" width="70" height="70" />
          </div>
        </Link>

        {/* <Link to="/course_review" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Course And Assesment Review</h2>
            <Link to="/automated">
              <button id="Automated">Automated</button>
            </Link>
            <Link to="/collabration">
              <button id="Collabration">Collabration with Instructor</button>
            </Link>
          </div>
        </Link> */}

        <Link to="/recommendation" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Reccomendation</h2>
            <img src={recomImage} alt="Gradbook" width="90" height="90" />
          </div>
        </Link>

        <Link to="/resources" className="instructor_block-link">
          <div className="instructor_block">
            <h2>Resources</h2>
            <img src={resourceImage} alt="Gradbook" width="90" height="90" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default QualityAssuranceTool;
