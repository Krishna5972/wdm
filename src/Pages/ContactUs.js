import React from "react";

function Contact() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Contact Us</h2>
      </div>
    

      <div className="container5" style={{justifyContent:"center", maxWidth: "40%", borderRadius: '10px'}}>
        <section>
          <h2>We're Here to Help</h2>
          <p>
            If you have any questions or require further information, please
            fill out the form below:
          </p>

          {/* Note: The form's action and method attributes are kept as is. */}
          <form action="submit_form.php" method="post" style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="name" style={{margin:"5px 0"}}>Name:</label>
            <input type="text" id="name" name="user_name" required style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}/>

            <label htmlFor="email" style={{margin:"5px 0"}}>Email:</label>
            <input type="email" id="email" name="user_email" required style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}/>

            <label htmlFor="subject" style={{margin:"5px 0"}}>Subject:</label>
            <input type="text" id="subject" name="subject" required style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }} />

            <label htmlFor="message" style={{margin:"5px 0"}}>Message:</label>
            <textarea
              id="message"
              name="user_message"
              rows="4"
              required
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>
            <br/>
            <input type="submit" value="Submit" style={{
              margin: "auto auto",
              /* width: "100%", */
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              border: "none",
              fontFamily: "Arial, sans-serif",
              cursor: "pointer",
            }}/>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
