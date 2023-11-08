import React, { useState, useEffect } from "react";
import axios from "../../components/axios";
import { Helmet } from "react-helmet";

function Notification() {
  const [exams, setExams] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchExams() {
    try {
      const response = await axios.post("/getExams.php");

      if (response.data.success) {
        setExams(response.data.data);
      } else {
        setErrorMessage("Error fetching exams: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error fetching exams: " + error);
    }
  }

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <>
      <Helmet>
        <title>View Exams</title>
      </Helmet>

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>View Exams</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <table
          style={{
            width: "600px",
            margin: "20px",
            borderCollapse: "collapse",
            textAlign: "left",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "12px" }}>Course ID</th>
              <th style={{ padding: "12px" }}>Exam Name</th>
              <th style={{ padding: "12px" }}>Exam Date</th>
              <th style={{ padding: "12px" }}>Exam Time</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>{exam.courseID}</td>
                <td style={{ padding: "12px" }}>{exam.examName}</td>
                <td style={{ padding: "12px" }}>{exam.examDate}</td>
                <td style={{ padding: "12px" }}>{exam.examTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Notification;
