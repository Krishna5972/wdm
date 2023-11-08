import React, { useState, useEffect } from "react";
import axios from "../../components/axios";
import { Helmet } from "react-helmet";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchCourses() {
    try {
      const response = await axios.post("/getCourses.php");

      if (response.data.success) {
        setCourses(response.data.data);
      } else {
        setErrorMessage("Error fetching courses: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error fetching courses: " + error);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Helmet>
        <title>Currently Available Courses</title>
      </Helmet>
      <h1
        style={{
          textAlign: "center",
          margin: "40px 0",
          color: "#34495e",
          fontWeight: "500",
        }}
      >
        Available Courses
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <table
          style={{
            width: "500px",
            margin: "20px",
            borderCollapse: "collapse",
            textAlign: "left",
            border: "1px solid #eaeaea",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#eaeaea", color: "#34495e" }}>
              <th style={{ padding: "15px", fontSize: "16px" }}>Course ID</th>
              <th style={{ padding: "15px", fontSize: "16px" }}>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} style={{ borderBottom: "1px solid #eaeaea" }}>
                <td style={{ padding: "15px", fontSize: "15px" }}>
                  {course.id}
                </td>
                <td style={{ padding: "15px", fontSize: "15px" }}>
                  {course.courseName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Courses;
