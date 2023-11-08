import React, { useState, useEffect } from "react";
import axios from "../../components/axios";
import { Helmet } from "react-helmet";

function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
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

  const addCourse = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("courseName", courseName);

      const response = await axios.post("/createCourse.php", formData);

      if (response.data.success) {
        fetchCourses();
        setCourseName("");
      } else {
        setErrorMessage("Error adding course: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error adding course: " + error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      const formData = new URLSearchParams();
      formData.append("course_id", id);

      const response = await axios.post("/deleteCourse.php", formData);

      if (response.data.success) {
        const updatedCourses = courses.filter((course) => course.id !== id);
        setCourses(updatedCourses);
      } else {
        setErrorMessage("Error deleting course: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error deleting course: " + error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Course</title>
      </Helmet>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Create Course</h1>

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
          <label style={{ fontWeight: "bold" }}>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            style={{ width: "90%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"  }}
            required
          />
          <button
            onClick={addCourse}
            style={{
              width: "auto",
              padding: "10px",
              backgroundColor: "#007bff",
              margin: "10px 30% 0 30%",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add Course
          </button>
        </div>

        <table
          style={{
            width: "400px",
            margin: "20px",
            borderCollapse: "collapse",
            textAlign: "left",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "12px" }}>Course ID</th>
              <th style={{ padding: "12px" }}>Course Name</th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>{course.id}</td>
                <td style={{ padding: "12px" }}>{course.courseName}</td>
                <td style={{ padding: "12px" }}>
                  <button
                    onClick={() => deleteCourse(course.id)}
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

export default CourseManagement;
