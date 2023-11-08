function ProgramCollaborationHub() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: "20px",
      padding: "20px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "10px",
      backgroundColor: "#eaecee",
    },
    header: {
      backgroundColor: "#2980b9",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "20px",
    },
    content: {
      backgroundColor: "#f5f5f5",
      padding: "10px",
      borderRadius: "5px",
      margin: "20px 0",
    },
    paragraph: {
      marginBottom: "20px",
      fontSize: "16px",
      lineHeight: "1.5",
      color: "#34495e",
    },
    list: {
      paddingLeft: "40px",
      color: "#7f8c8d",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Program Collaboration Hub</h1>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          Welcome to the Program Collaboration Hub! This is a dedicated space
          for program coordinators to collaborate, share resources, and manage
          academic programs.
        </p>
        <div
          style={{
            backgroundColor: "#ecf0f1",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <h2>Tools and Features:</h2>
          <ul style={styles.list}>
            <li>
              Discussion Boards: Engage in topical discussions, seek advice, and
              share best practices with fellow coordinators.
            </li>
            <li>
              Resource Library: Access a curated collection of program planning
              templates, curriculum guidelines, and other essential resources.
            </li>
            <li>
              Scheduling Assistant: Coordinate events, meetings, and
              program-related activities with an integrated calendar tool.
            </li>
            <li>
              Program Analytics: Dive deep into student performance, program
              popularity, and other key metrics to inform future decisions.
            </li>
            <li>
              Feedback Portal: Collect and act upon feedback from both educators
              and students to continuously improve your programs.
            </li>
          </ul>
        </div>
        <p style={styles.paragraph}>
          Our mission is to streamline the process of academic program
          management and foster a collaborative environment. Join a workshop,
          participate in a discussion, or simply explore the available
          resources.
        </p>
        <div
          style={{
            backgroundColor: "#dfe6e9",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h2>Support:</h2>
          <p style={styles.paragraph}>
            Need assistance? Reach out to our dedicated support team or access
            the comprehensive help guide. Remember, collaboration is the key to
            enhancing the educational experience for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramCollaborationHub;
