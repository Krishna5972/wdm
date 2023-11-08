import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../components/axios";
import { Helmet } from "react-helmet";

function CreateExam() {
  const [exams, setExams] = useState([]);
  const [courseID, setCourseID] = useState("");
  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examTime, setExamTime] = useState("");
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

  const addExam = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("courseID", courseID);
      formData.append("examName", examName);
      formData.append("examDate", examDate);
      formData.append("examTime", examTime);

      const response = await axios.post("/createExam.php", formData);

      if (response.data.success) {
        fetchExams();
        setCourseID("");
        setExamName("");
        setExamDate("");
        setExamTime("");
        fetchExams();
      } else {
        setErrorMessage("Error adding exam: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error adding exam: " + error);
    }
  };

  const deleteExam = async (id) => {
    try {
      const formData = new URLSearchParams();
      formData.append("exam_id", id);

      const response = await axios.post("/deleteExam.php", formData);

      if (response.data.success) {
        const updatedExams = exams.filter((exam) => exam.id !== id);
        setExams(updatedExams);
      } else {
        setErrorMessage("Error deleting exam: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error deleting exam: " + error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Exam</title>
      </Helmet>

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Create Exam</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "300px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Course ID:</label>
          <input
            type="text"
            value={courseID}
            onChange={(e) => setCourseID(e.target.value)}
            style={{ width: "90%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"}}
          />
          <label style={{ fontWeight: "bold" }}>Exam Name:</label>
          <input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            style={{ width: "90%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc" }}
            
          />
          <label style={{ fontWeight: "bold" }}>Exam Date:</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            style={{ width: "90%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"  }}
            required
          />

          <label style={{ fontWeight: "bold" }}>Exam Time:</label>
          <input
            type="time"
            value={examTime}
            onChange={(e) => setExamTime(e.target.value)}
            style={{ width: "90%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"  }}
            required
          />
          <button
            onClick={addExam}
            style={{
              margin: "10px 35% 0 35%;",
              /* width: "100%", */
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              border: "none",
              fontFamily: "Arial, sans-serif",
              cursor: "pointer",
            }}
          >
            Add Exam
          </button>
        </div>

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
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>{exam.courseID}</td>
                <td style={{ padding: "12px" }}>{exam.examName}</td>
                <td style={{ padding: "12px" }}>{exam.examDate}</td>
                <td style={{ padding: "12px" }}>{exam.examTime}</td>
                <td style={{ padding: "12px" }}>
                  <button
                    onClick={() => deleteExam(exam.id)}
                    style={{
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CreateExam;
