import "../../style.css";
import { Helmet } from "react-helmet";

function ReviewAndImprovement() {
  return (
    <>
      <Helmet>
        <title>Academic Program Review</title>
      </Helmet>
      <h1>Review and Improvement</h1>
      <div style={{ padding: "20px", backgroundColor: "#f7f9fc" }}>
        <h2>Current Program Details:</h2>
        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#e5e7eb",
            padding: "10px",
          }}
        >
          <strong>Title:</strong> <span>Introduction to Quantum Physics</span>
          <br />
          <strong>Description:</strong>{" "}
          <span>An overview of quantum mechanics and its applications.</span>
          <br />
          <strong>Duration:</strong> <span>40 Hours</span>
          <br />
          <strong>Instructor:</strong> <span>Dr. John Doe</span>
          <br />
        </div>

        <h2>Suggestions for Improvement:</h2>
        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#d1fae5",
            padding: "10px",
          }}
        >
          <strong>Content Update:</strong>
          <p style={{ color: "#047857" }}>
            Consider adding recent discoveries in quantum mechanics from the
            last 5 years.
          </p>
        </div>
        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#d1fae5",
            padding: "10px",
          }}
        >
          <strong>Interactive Sessions:</strong>
          <p style={{ color: "#047857" }}>
            Organize more hands-on workshops and practical sessions for better
            understanding.
          </p>
        </div>
        <div
          style={{
            marginBottom: "20px",
            backgroundColor: "#d1fae5",
            padding: "10px",
          }}
        >
          <strong>Resource Material:</strong>
          <p style={{ color: "#047857" }}>
            Update the reading list to include recent publications and research
            papers.
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#3B82F6",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit Suggestions
        </button>
      </div>
    </>
  );
}

export default ReviewAndImprovement;
