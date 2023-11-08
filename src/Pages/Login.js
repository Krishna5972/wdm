import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../components/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post("/login.php", formData);

      if (response.data.success) {
        localStorage.setItem("userEmail", response.data.email);

        const emailFromData = new URLSearchParams();
        emailFromData.append("email", email);

        const role = await axios.post("/getUserRole.php", emailFromData);
        if (response.data.success) {
          localStorage.setItem("userRole", role.data.role);
        }

        navigate("/");

        navigate("/");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (e) {
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div
      style={{
        margin: "10% 30%",
        maxWidth: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "25px"
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          borderRadius: "5px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            color: "#333",
            marginBottom: "25px",
          }}
        >
          Login
        </h2>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="email"
              style={{
                fontFamily: "Arial, sans-serif",
                color: "#555",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="password"
              style={{
                fontFamily: "Arial, sans-serif",
                color: "#555",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              margin: "auto 45%",
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
            Login
          </button>
        </form>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "Arial, sans-serif",
            color: "#555",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#007BFF", textDecoration: "none" }}
          >
            Register
          </Link>
        </p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            color: "#555",
          }}
        >
          Forgot your password?{" "}
          <Link
            to="/forgot_password"
            style={{ color: "#007BFF", textDecoration: "none" }}
          >
            Reset it here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
