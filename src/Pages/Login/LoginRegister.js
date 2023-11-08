import React, { useState } from "react";
import axios from "../../components/axios";
import { Link, useNavigate } from "react-router-dom";

function RegisterAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    const storedOtp = localStorage.getItem("sentOTP");
    if (e.target.value === storedOtp) {
      setIsOtpVerified(true);
    } else {
      setIsOtpVerified(false);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const storedOtp = localStorage.getItem("sentOTP");

    if (!/^([0-9]{3}-[0-9]{3}-[0-9]{4})$/.test(phone)) {
      setErrorMessage("Invalid USA phone number format.");
      return;
    }

    if (otp !== storedOtp) {
      setErrorMessage("Invalid OTP.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
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
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
        setRole("Student");
        setSuccessMessage("Registration successful. Please login.");
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (e) {
      setErrorMessage(e.response?.data?.message || "Error during registration");
    }
  };

  const sendOTP = async () => {
    try {
      if (!email.trim()) {
        setErrorMessage("Email cannot be empty.");
        return;
      }

      const params = new URLSearchParams();
      params.append("email", email);

      const response = await axios.post("/sendOTP.php", params);
      if (response.data.success) {
        localStorage.setItem("sentOTP", response.data.otp);
        setIsOTPSent(true);
        setSuccessMessage("OTP has been sent to your email successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to send OTP.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Error sending OTP.");
    }
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center", width: "100%" }}>
      <div
        style={{
          marginTop: "60px",
          display: "inline-block",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Register</h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name:</label>
            <input
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <input
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={sendOTP}
              style={{ marginLeft: "10px" }}
            >
              Send OTP
            </button>
          </div>

          {isOTPSent && (
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="otp">Enter OTP:</label>
              <input
                style={{
                  width: "90%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                type="text"
                value={otp}
                onChange={handleOtpChange}
                id="otp"
                name="otp"
                required
              />
            </div>
          )}

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="role">Role:</label>
            <select
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              id="role"
              name="role"
              required
            >
              <option value="Student">Student</option>
              <option value="ProgramCoordinator">Program Coordinator</option>
              <option value="QualityAssurance">Quality Assurance</option>
              <option value="Instructor">Instructor</option>
              <option value="Admin">Instructor</option>
            </select>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="phone">Phone:</label>
            <input
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Format: XXX-XXX-XXXX"
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password:</label>
            <input
            style={{
              width: "90%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-left" style={{ marginBottom: "15px" }}>
            Already have an account?&nbsp;
            <Link to="/login">Login</Link>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterAccount;
