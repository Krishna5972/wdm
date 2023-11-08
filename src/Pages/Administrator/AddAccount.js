import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../components/axios";
import "../../style.css";

function AddAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();

    if (!/^([0-9]{3}-[0-9]{3}-[0-9]{4})$/.test(phone)) {
      setErrorMessage("Invalid USA phone number format.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== password_confirmation) {
      setErrorMessage("Password and Confirm Password must match.");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("phone", phone);

    try {
      const response = await axios.post("/register.php", formData);

      if (response.data.success) {
        navigate("/administrator");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (e) {
      setErrorMessage(e.response?.data?.message || "Error during registration");
    }
  };

  return (
    <main
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Add User</h1>

      {errorMessage && (
        <p style={{ color: "red", textAlign: "center", marginBottom: "20px" }}>
          {errorMessage}
        </p>
      )}

      <form
        onSubmit={handleRegister}
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          placeholder="Enter Name"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          placeholder="Enter Email"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="role">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          id="role"
          name="role"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="Student">Student</option>
          <option value="ProgramCoordinator">Program Coordinator</option>
          <option value="QualityAssurance">Quality Assurance</option>
          <option value="Instructor">Instructor</option>
          <option value="Admin">Administrator</option>
        </select>

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          name="phone"
          placeholder="Enter phone number (format: 123-456-7890)"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          placeholder="Enter Password"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          id="confirm-password"
          name="confirm-password"
          placeholder="Re-enter Password"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add User
        </button>
      </form>
    </main>
  );
}

export default AddAccount;
