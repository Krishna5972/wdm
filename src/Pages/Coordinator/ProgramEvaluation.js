import axios from "../../components/axios";
import React, { useState, useEffect } from "react";

function ProgramEvaluation() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    EventName: "",
    Date: "",
    Location: "",
    Description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];
  async function fetchEvents() {
    try {
      const response = await axios.post("/getEvents.php");
      if (response.data.success) {
        setEvents(response.data.data);
      } else {
        setErrorMessage("Error inserting event: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error fetching events: " + error);
    }
  }
  useEffect(() => {
    fetchEvents();
  }, []);
  async function deleteEvent(eventId) {
    try {
      const formData = new URLSearchParams();
      formData.append("event_id", eventId);

      const response = await axios.post("/deleteEvent.php", formData);

      if (response.data.success) {
        const updatedEvents = events.filter((event) => event.id !== eventId);
        setEvents(updatedEvents);
        fetchEvents();
      } else {
        setErrorMessage("Error inserting event: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error inserting event: " + error);
    }
  }

  async function handleSubmit() {
    if (
      !newEvent.EventName ||
      !newEvent.Date ||
      !newEvent.Location ||
      !newEvent.Description
    ) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }
    try {
      const formData = new URLSearchParams();
      formData.append("EventName", newEvent.EventName);
      formData.append("Date", newEvent.Date);
      formData.append("Location", newEvent.Location);
      formData.append("Description", newEvent.Description);

      const response = await axios.post("/insertEvent.php", formData);

      if (response.data.success) {
        alert(response.data.message);
        setNewEvent({
          EventID: "",
          EventName: "",
          Date: "",
          Location: "",
          Description: "",
        });
        fetchEvents();
      } else {
        setErrorMessage("Error inserting event: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("Error inserting event: " + error);
    }
  }

  return (
    <div style={{textAlign : "center"}}>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={() => setShowForm(!showForm)}
      >
        Add Program
      </button>
      {showForm && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <br />
          <input
            type="text"
            placeholder="Event Name"
            value={newEvent.EventName}
            onChange={(e) =>
              setNewEvent((prevState) => ({
                ...prevState,
                EventName: e.target.value,
              }))
            }
            style={{ width: "90%",
            padding: "10px",
            marginBottom : "5px",
            borderRadius: "5px",
            border: "1px solid #ccc" }}
          />
          <br />
          <input
            type="date"
            value={newEvent.Date}
            min={today}
            onChange={(e) =>
              setNewEvent((prevState) => ({
                ...prevState,
                Date: e.target.value,
              }))
            }
            style={{ width: "90%",
            padding: "10px",
            marginBottom : "5px",
            borderRadius: "5px",
            border: "1px solid #ccc" }}
          />
          <br />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.Location}
            onChange={(e) =>
              setNewEvent((prevState) => ({
                ...prevState,
                Location: e.target.value,
              }))
            }
            style={{ width: "90%",
            padding: "10px",
            marginBottom : "5px",
            borderRadius: "5px",
            border: "1px solid #ccc" }}
          />
          <br />
          <textarea
            type="text"
            placeholder="Description"
            value={newEvent.Description}
            onChange={(e) =>
              setNewEvent((prevState) => ({
                ...prevState,
                Description: e.target.value,
              }))
            }
            style={{ width: "90%",
            padding: "10px",
            marginBottom : "5px",
            borderRadius: "5px",
            border: "1px solid #ccc" }}
          />
          <br />
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #ddd",
          marginTop: "20px",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
          marginBottom : "10px"
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f2f2f2",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
            }}
          >
            <th style={{ padding: "8px", textAlign: "center" }}>Event ID</th>
            <th style={{ padding: "8px", textAlign: "center" }}>Event Name</th>
            <th style={{ padding: "8px", textAlign: "center" }}>Date</th>
            <th style={{ padding: "8px", textAlign: "center" }}>Location</th>
            <th style={{ padding: "8px", textAlign: "center" }}>Description</th>
            <th style={{ padding: "8px", textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 && events.map((event) => (
            <tr key={event.EventID} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px", textAlign: "center" }}>
                {event.EventID}
              </td>
              <td style={{ padding: "8px" }}>{event.EventName}</td>
              <td style={{ padding: "8px", textAlign: "center" }}>
                {event.Date}
              </td>
              <td style={{ padding: "8px" }}>{event.Location}</td>
              <td style={{ padding: "8px" }}>{event.Description}</td>
              <td style={{ padding: "8px", textAlign: "center" }}>
                <button
                  onClick={() => deleteEvent(event.EventID)}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px 15px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <td></td>
          <td></td>
          {events.length == 0 && <div style={{textAlign:"center", width:"100%", margin:"5px"}}>No Data</div>}
        </tbody>
      </table>
    </div>
  );
}

export default ProgramEvaluation;
