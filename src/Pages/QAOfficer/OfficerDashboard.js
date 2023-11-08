import { Helmet } from "react-helmet";

function OfficerDashboard() {
  return (
    <>
      <Helmet>
        <title>Quality Assurance Officer Dashboard</title>
      </Helmet>

      <div
        style={{
          backgroundColor: "#f0f8ff",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header
          style={{
            backgroundColor: "#483d8b",
            padding: "20px",
            borderRadius: "8px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1>Quality Assurance Officer Dashboard</h1>
        </header>

        <section
          style={{
            backgroundColor: "#7b68ee",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <h2>Courses Under Review</h2>
          <ul style={{ listStyle: "none" }}>
            <li
              style={{
                margin: "10px 0",
                padding: "10px",
                backgroundColor: "#6a5acd",
                borderRadius: "8px",
              }}
            >
              Introduction to Biology - Prof. Smith
            </li>
            <li
              style={{
                margin: "10px 0",
                padding: "10px",
                backgroundColor: "#9370db",
                borderRadius: "8px",
              }}
            >
              Advanced Mathematics - Dr. Williams
            </li>
            <li
              style={{
                margin: "10px 0",
                padding: "10px",
                backgroundColor: "#6a5acd",
                borderRadius: "8px",
              }}
            >
              History of Art - Ms. Thompson
            </li>
          </ul>
        </section>

        <section
          style={{
            backgroundColor: "#ffa07a",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <h2>Pending Tasks</h2>
          <ul style={{ listStyle: "none" }}>
            <li style={{ margin: "10px 0" }}>
              Review feedback for "Introduction to Biology"
            </li>
            <li style={{ margin: "10px 0" }}>
              Meet with Dr. Williams to discuss course materials
            </li>
            <li style={{ margin: "10px 0" }}>
              Attend feedback session for "History of Art"
            </li>
          </ul>
        </section>

        <section
          style={{
            backgroundColor: "#20b2aa",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <h2>Announcements</h2>
          <p>
            Meeting with the faculty on the 15th to discuss course feedback
            improvements.
          </p>
        </section>

        <section
          style={{
            backgroundColor: "#3cb371",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <h2>Course Evaluation Statistics</h2>
          <p>
            Average course rating: <strong>4.5/5</strong>
          </p>
          <p>
            Number of courses reviewed: <strong>12</strong>
          </p>
        </section>

        <section
          style={{
            backgroundColor: "#db7093",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <h2>Resources</h2>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                University Guidelines
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                QA Procedures
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                Feedback Collection Tools
              </a>
            </li>
          </ul>
        </section>

        <section
          style={{
            backgroundColor: "#b0e0e6",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            color: "#333",
          }}
        >
          <h2>Communication</h2>
          <p>
            For any queries or concerns, reach out at:{" "}
            <a
              href="mailto:jane.doe@university.edu"
              style={{ color: "#483d8b", textDecoration: "underline" }}
            >
              Wdmcourse2023UTA@gmail.com
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export default OfficerDashboard;
