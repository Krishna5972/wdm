import "../../style.css";
import { Helmet } from "react-helmet";

function Curriculum() {
  return (
    <>
      <Helmet>
        <title>Academic Program Homepage</title>
      </Helmet>
      <h1>Curriculum</h1>
      <div>
        <h2 style={{ color: "blue" }}>Course Details</h2>
        <p>
          <strong>Course Code:</strong> CS101
          <br />
          <strong>Course Title:</strong> Introduction to Programming
          <br />
          <strong>Units/Credits:</strong> 3<br />
          <strong>Semester Offered:</strong> Fall
          <br />
        </p>

        <h2 style={{ color: "blue" }}>Course Content</h2>
        <ul>
          <li>Week 1: Basics of Programming</li>
          <li>Week 2: Data Types and Variables</li>
          <li>Week 3: Control Structures</li>
          {/* ... and so on */}
        </ul>

        <h2 style={{ color: "blue" }}>Learning Outcomes</h2>
        <ul>
          <li>
            By the end of this course, students will be able to write basic
            programs using Python.
          </li>
          <li>
            Students will understand different data types and their
            applications.
          </li>
          <li>
            Students will be adept at using control structures like loops and
            conditionals.
          </li>
        </ul>

        <h2 style={{ color: "blue" }}>Assessment Methods</h2>
        <p>
          <strong>Weekly Quizzes:</strong> 30%
          <br />
          <strong>Midterm Exam:</strong> 30%
          <br />
          <strong>Final Project:</strong> 30%
          <br />
          <strong>Participation:</strong> 10%
          <br />
        </p>

        <h2 style={{ color: "blue" }}>Feedback and Improvement</h2>
        <ul>
          <li>
            Increased focus on practical assignments based on student feedback.
          </li>
          <li>
            Introduced pair programming sessions to enhance collaborative
            skills.
          </li>
        </ul>

        <h2 style={{ color: "blue" }}>Resources</h2>
        <ul>
          <li>
            <strong>Recommended Textbook:</strong> "Python for Beginners" by
            John Doe.
          </li>
          <li>
            <strong>Supplementary Materials:</strong> Online lectures, coding
            platforms, etc.
          </li>
        </ul>

        <h2 style={{ color: "blue" }}>Instructor Details</h2>
        <p>
          <strong>Name:</strong> Dr. Jane Smith
          <br />
          <strong>Qualifications:</strong> PhD in Computer Science
          <br />
          <strong>Email:</strong> jane.smith@university.edu
          <br />
        </p>

        <h2 style={{ color: "blue" }}>Student Feedback</h2>
        <p>
          <strong>Average Rating:</strong> 4.5/5
        </p>
        <ul>
          <li>"Loved the hands-on approach!"</li>
          <li>"Wish there were more real-world project examples."</li>
        </ul>
      </div>
    </>
  );
}

export default Curriculum;
