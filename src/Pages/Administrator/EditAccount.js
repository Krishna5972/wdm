import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../components/axios";
function EditUsers() {
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

  async function updateUser(
    userId,
    userEmail,
    userName,
    userPassword,
    userRole,
    userPhone
  ) {
    try {
      const formData = new URLSearchParams();
      formData.append("id", userId);
      formData.append("email", userEmail);
      formData.append("name", userName);
      formData.append("password", userPassword);
      formData.append("role", userRole);
      formData.append("phone", userPhone);

      const response = await axios.post("/updateUserData.php", formData);

      if (response.data.success) {
        alert(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
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
          <th style={{ padding: "10px 15px" }}>password</th>
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
            <td>
              <input
                type="text"
                id={`name_${user.id}`}
                defaultValue={user.name}
                style={{
                  width: "100%",
                  padding: "5px",
                  boxSizing: "border-box",
                }}
              />
            </td>
            <td>
              <input
                type="password"
                id={`password_${user.id}`}
                defaultValue={user.password}
                style={{
                  width: "100%",
                  padding: "5px",
                  boxSizing: "border-box",
                }}
              />
            </td>
            <td>
              <input
                type="email"
                id={`email_${user.id}`}
                defaultValue={user.email}
                style={{
                  width: "100%",
                  padding: "5px",
                  boxSizing: "border-box",
                }}
              />
            </td>
            <td>
              <select
                id={`role_${user.id}`}
                defaultValue={user.role}
                style={{
                  width: "100%",
                  padding: "5px",
                  boxSizing: "border-box",
                }}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type="text"
                id={`phone_${user.id}`}
                defaultValue={user.phone}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                style={{
                  width: "100%",
                  padding: "5px",
                  boxSizing: "border-box",
                }}
              />
            </td>
            <td>
              <button
                onClick={() => {
                  const userName = document.getElementById(
                    `name_${user.id}`
                  ).value;
                  const userPassword = document.getElementById(
                    `password_${user.id}`
                  ).value;
                  const userEmail = document.getElementById(
                    `email_${user.id}`
                  ).value;
                  const userRole = document.getElementById(
                    `role_${user.id}`
                  ).value;
                  const userPhone = document.getElementById(
                    `phone_${user.id}`
                  ).value;

                  updateUser(
                    user.id,
                    userEmail,
                    userName,
                    userPassword,
                    userRole,
                    userPhone
                  );
                }}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EditUsers;
