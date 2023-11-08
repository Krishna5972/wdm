import React from 'react';
import './footer.css'; // Make sure to have this file with the styles provided below
import logo from "../Images/logo.png"; // You can use a logo in the footer as well

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="College Logo" className="footer-logo-image" />
        </div>
        <div className="footer-address">
          <h3>College Address</h3>
          <p>123 College Lane<br/>University City, State 12345</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-vision">
          <h3>Our Vision</h3>
          <p>A comprehensive software solution that simplifies and improves educational institution administration is called a student management system. Enrollment, attendance, grades, and personal data about students may all be managed effectively with its help.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Team 10. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
