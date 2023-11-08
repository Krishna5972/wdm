import React from "react";
import { Helmet } from "react-helmet";

export default function Progress() {
  const studentProgressMockData = [
    { subject: "Math 101", quiz1: 90, quiz2: 85, midterm: 88, final: 92 },
    { subject: "History 201", quiz1: 76, quiz2: 80, midterm: 84, final: 89 },
    { subject: "Physics 103", quiz1: 82, quiz2: 86, midterm: 90, final: 91 },
  ];

  return (
    <>
      <Helmet>
        <title>Student Progress</title>
      </Helmet>
      <div style={{ backgroundColor: "#f7f7f7", padding: "20px" }}>
        <h1
          style={{
            color: "#333",
            borderBottom: "3px solid #444",
            paddingBottom: "10px",
          }}
        >
          Student Progress
        </h1>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #333" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>Subject</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Quiz 1</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Quiz 2</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Midterm</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Final</th>
            </tr>
          </thead>
          <tbody>
            {studentProgressMockData.map((record, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#fff" : "#e6e6e6",
                }}
              >
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.subject}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.quiz1}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.quiz2}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.midterm}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {record.final}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
