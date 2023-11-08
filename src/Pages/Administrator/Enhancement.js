import "../../style.css";
import { Helmet } from "react-helmet";

function Enhancement() {
  return (
    <>
      <Helmet>
        <title>Academic Program Homepage</title>
      </Helmet>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            borderBottom: "2px solid black",
            paddingBottom: "10px",
          }}
        >
          Enhancement
        </h1>

        <div
          style={{
            margin: "20px 0",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px #aaa",
          }}
        >
          <p style={{ color: "gray", fontSize: "20px", marginBottom: "10px" }}>
            <strong>Course Title:</strong> Advanced Machine Learning
          </p>

          <p
            style={{ color: "blue", fontWeight: "bold", marginBottom: "10px" }}
          >
            Professor: Dr. John Doe
          </p>

          <p style={{ fontStyle: "italic", margin: "20px 0", color: "#333" }}>
            This course delves into the complexities of advanced machine
            learning algorithms, understanding deep neural networks, and
            exploring the latest advancements in artificial intelligence.
          </p>

          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Course Outline:
            </span>

            <ul
              style={{
                marginLeft: "40px",
                marginTop: "10px",
                listStyleType: "disc",
              }}
            >
              <li>Introduction to Advanced ML</li>
              <li>Deep Neural Networks</li>
              <li>Convolutional Neural Networks</li>
              <li>Recurrent Neural Networks</li>
              <li>Generative Adversarial Networks</li>
              <li>Reinforcement Learning</li>
            </ul>
          </div>

          <p style={{ color: "green", marginBottom: "10px" }}>
            <strong>Prerequisites:</strong> Basic knowledge of machine learning,
            linear algebra, and proficiency in Python.
          </p>

          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: "5px",
              margin: "20px 0",
            }}
          >
            <strong>Student Testimonials:</strong>
            <blockquote
              style={{
                margin: "10px 0",
                padding: "10px",
                borderLeft: "5px solid blue",
              }}
            >
              "This was one of the most engaging courses I've taken. Dr. Doe's
              approach to teaching complex algorithms is simply unparalleled." -
              Jane Smith, Class of 2022
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enhancement;
