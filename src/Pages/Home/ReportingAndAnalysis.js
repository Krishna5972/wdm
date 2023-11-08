import { Helmet } from "react-helmet";

export default function AdminDashboard() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <h1
        style={{
          color: "#2c3e50",
          borderBottom: "2px solid #2c3e50",
          paddingBottom: "10px",
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#3498db",
            borderRadius: "5px",
            color: "#fff",
            width: "23%",
          }}
        >
          <h2>Total Students</h2>
          <p>1500</p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#e74c3c",
            borderRadius: "5px",
            color: "#fff",
            width: "23%",
          }}
        >
          <h2>Total Courses</h2>
          <p>120</p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#2ecc71",
            borderRadius: "5px",
            color: "#fff",
            width: "23%",
          }}
        >
          <h2>Announcements</h2>
          <p>5 New</p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#f39c12",
            borderRadius: "5px",
            color: "#fff",
            width: "23%",
          }}
        >
          <h2>Feedbacks</h2>
          <p>20 Unread</p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2
          style={{ borderBottom: "1px solid #2c3e50", paddingBottom: "10px" }}
        >
          Recent Courses
        </h2>
        <ul>
          <li>Introduction to Programming</li>
          <li>Advanced Mathematics</li>
          <li>History of Europe</li>
          <li>Physics Principles</li>
          <li>Chemistry Basics</li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2
          style={{ borderBottom: "1px solid #2c3e50", paddingBottom: "10px" }}
        >
          Recent Feedback
        </h2>
        <p>
          <strong>John Doe:</strong> The new course module is fantastic!
        </p>
        <p>
          <strong>Jane Smith:</strong> I faced some issues with the quiz
          section. Please look into it.
        </p>
        <p>
          <strong>Mark Anderson:</strong> Loving the new UI of the platform!
        </p>
      </div>
    </div>
  );
}
