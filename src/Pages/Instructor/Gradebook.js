import React from "react";
import { Helmet } from "react-helmet";

function Gradebook() {
  const mockData = [
    { id: 1, name: "John Smith", course: "Math 101", grade: 90 },
    { id: 2, name: "Jane Doe", course: "Math 101", grade: 75 },
    { id: 3, name: "Emily Stone", course: "Math 101", grade: 82 },
    { id: 4, name: "Chris Brown", course: "Math 101", grade: 95 },
    // Add more mock data as needed
  ];

  const getColor = (grade) => {
    if (grade >= 90) return "#28a745"; // Green for A
    if (grade >= 80) return "#17a2b8"; // Blue for B
    if (grade >= 70) return "#ffc107"; // Yellow for C
    return "#dc3545"; // Red for D and F
  };

  return (
    <>
      <Helmet>
        <title>Instructor's Gradebook</title>
      </Helmet>
      <div style={{ backgroundColor: "#f4f4f4", padding: "20px" }}>
        <h1 style={{ color: "#333" }}>Instructor's Gradebook</h1>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #333" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>Student ID</th>
              <th style={{ padding: "10px", textAlign: "left" }}>
                Student Name
              </th>
              <th style={{ padding: "10px", textAlign: "left" }}>Course</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Grade</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((record) => (
              <tr key={record.id}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.id}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.name}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.course}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    color: getColor(record.grade),
                  }}
                >
                  {record.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Gradebook;
