import "../style.css";
import { Helmet } from "react-helmet";
import AboutusImage from '../Images/Aboutus.png'
export function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div style={{ textAlign: "center" }}>
        <h2>About Us</h2>
      </div>

      <div className="container5" style={{/*borderRadius : "15px", */backgroundImage: `url(${AboutusImage})`, 
      backgroundSize: 'cover', backgroundPosition:"bottom", color:"white", fontSize:'19px', 
      fontWeight: "800px", maxWidth:"100%", margin:"0"}}>
        <section>
          <h2>Our Story</h2>
          <p style={{textShadow: '3px 1px 2px rgba(0, 0, 0, 0.5)', zIndex:'1'}}>
            Welcome to the MSC (Master of Science) in Computer Science academic
            program at MSC Academic Program for the Fall 2023 semester! We are
            dedicated to providing high-quality education and fostering
            innovation in the field of computer science.
          </p>
        </section>

        {/* New section for Company's Vision */}
        <section>
          <h2>Our Vision</h2>
          <p style={{textShadow: '3px 1px 2px rgba(0, 0, 0, 0.5)', zIndex:'1'}}>
            Our Vision is to empower students with advanced knowledge,
            problem-solving skills, and expertise in computer science. We strive
            to prepare our students to excel in various domains of technology
            and contribute to the ever-evolving tech industry.
          </p>
        </section>

        {/* New section for Company's Mission */}
        <section>
          <h2>Our Mission</h2>
          <p style={{textShadow: '3px 1px 2px rgba(0, 0, 0, 0.5)', zIndex:'1'}}>
            Our mission is to empower students with advanced knowledge,
            problem-solving skills, and expertise in computer science. We strive
            to prepare our students to excel in various domains of technology
            and contribute to the ever-evolving tech industry.
          </p>
        </section>

        {/* New section for Team Introduction */}
        <section>
          <h2>Meet Our Team</h2>
          <p style={{textShadow: '3px 1px 2px rgba(0, 0, 0, 0.5)', zIndex:'1'}}>
            Yash Patel - 1002084351 <br /> Prathima Jagini – 1002088570 <br />
            Vikitha Reddy Jakka – 1002036998
            <br /> Vineeth Itha - 1002037030
            <br />
            Ali Amir Imran – 1002060944
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
