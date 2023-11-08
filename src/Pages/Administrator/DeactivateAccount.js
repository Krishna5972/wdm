import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../components/axios";
function DeactivateAccount() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.post("/getUsersToEdit.php");
        if (response.data.success) {
          setUsers(response.data.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const roles = [
    "Student",
    "ProgramCoordinator",
    "QualityAssurance",
    "Instructor",
    "Admin",
  ];

  async function deleteUser(userId) {
    try {
      const formData = new URLSearchParams();
      formData.append("id", userId);

      const response = await axios.post("/deleteUser.php", formData);

      if (response.data.success) {
        alert(response.data.message);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Removing the deleted user from the state
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
        overflow: "hidden",
        borderRadius: "5px",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#007BFF", color: "#FFF" }}>
          <th style={{ padding: "10px 15px" }}>id</th>
          <th style={{ padding: "10px 15px" }}>name</th>
          <th style={{ padding: "10px 15px" }}>email</th>
          <th style={{ padding: "10px 15px" }}>role</th>
          <th style={{ padding: "10px 15px" }}>phone</th>
          <th style={{ padding: "10px 15px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px 15px" }}>{user.id}</td>
            <td style={{ padding: "10px 15px" }}>{user.name}</td>
            <td style={{ padding: "10px 15px" }}>{user.email}</td>
            <td style={{ padding: "10px 15px" }}>{user.role}</td>
            <td style={{ padding: "10px 15px" }}>{user.phone}</td>
            <td>
              <button
                onClick={() => deleteUser(user.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DeactivateAccount;
