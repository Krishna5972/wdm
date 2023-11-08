import "../../style.css";
import { Helmet } from "react-helmet";

function Resources() {
  return (
    <>
      <Helmet>
        <title>Quality Assurance Resources</title>
      </Helmet>

      <div
        style={{
          backgroundColor: "#7B68EE",
          padding: "10px 30px",
          borderRadius: "5px",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "20px",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Quality Assurance Resources
      </div>

      {["Guidelines", "Tools", "Training", "Additional Resources"].map(
        (header, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: ["#9370DB", "#8A2E2", "#9932CC", "#BA55D3"][idx],
              padding: "15px 30px",
              borderRadius: "5px",
              marginBottom: "15px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h2 style={{ color: "#fff" }}>{header}</h2>
            <ul>
              {[
                [
                  "Course Review Standards",
                  "Feedback Collection Methodologies",
                  "Content Quality Metrics",
                  "Student Engagement Analysis Techniques",
                ],
                [
                  "Quality Assurance Software",
                  "Feedback Collection Platforms",
                  "Automated Content Scanners",
                  "Analytics and Data Visualization Dashboards",
                ],
                [
                  "Introduction to Quality Assurance in Education",
                  "Advanced Course Review Techniques",
                  "Utilizing Data in QA Decisions",
                  "Engagement with Instructors for Feedback",
                ],
                [
                  "QA Community Forums",
                  "Webinars and Online Trainings",
                  "QA Officer Networking Events",
                  "Monthly Newsletter",
                ],
              ][idx].map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </>
  );
}

export default Resources;
