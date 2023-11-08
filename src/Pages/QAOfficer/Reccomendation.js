import React, { useState, useEffect } from "react";
import axios from "../../components/axios";
import "../../style.css";
import { Helmet } from "react-helmet";

function Recommendation() {
  const [recommendations, setRecommendations] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [events, setEvents] = useState([]);

  const fetchRecommendations = async () => {
    try {
      const response = await axios.post("/fetchRecommendaitons.php");
      if (response.data.success) {
        setRecommendations(response.data.data);
      } else {
        console.error("Error fetching recommendations:", response.data.message);
      }
    } catch (error) {
      console.error("Server error when fetching recommendations:", error);
    }
  };  

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const handleAddRecommendation = async () => {
    if (!newTitle.trim()) {
      alert("Title cannot be empty!");
      return;
    }

    if (!newDescription.trim()) {
      alert("Description cannot be empty!");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("title", newTitle);
    formData.append("description", newDescription);

    try {
      const response = await axios.post("/addRecommendation.php", formData);
      if (response.data.success) {
        fetchRecommendations(); // Reload recommendations after adding
        setShowAddForm(false);
      } else {
        console.error("Error adding recommendation:", response.data.message);
      }
    } catch (error) {
      console.error("Server error when adding recommendation:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Academic Program Homepage</title>
      </Helmet>

      <h1 style={{textAlign:"center"}}>Recommendation</h1>

      {showAddForm ? (
        <div style={{ marginBottom: "20px" }}>
          <input
            // style={{ width: "100%", padding: "10px", marginBottom: "10px" }} // Styling added here
            style={{ width: "90%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            margin: "20px 20px 0 20px" }}
            type="text"
            placeholder="Recommendation Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            style={{ width: "90%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            margin: "20px 20px 10px 20px" }}
            placeholder="Recommendation Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          ></textarea>
          <button
            style={{
              /*float: "right",*/
              padding: "10px 20px",
              backgroundColor: "Green",
              color: "white",
              marginLeft: "20px"
            }}
            onClick={handleAddRecommendation}
          >
            Add Recommendation
          </button>
        </div>
      ) : (
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "Green",
            color: "white",
            margin: "20px"
          }}
          onClick={() => setShowAddForm(true)}
        >
          Add Recommendation
        </button>
      )}

      {recommendations.map((recommendation, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px 30px",
            borderRadius: "5px",
            marginBottom: "15px",
            transition: "0.3s",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
          }}
        >
          <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>
            {recommendation.Title}{" "}
            {/* Assuming the fetched data fields are 'Title' and 'Description', adjust if different */}
          </h2>
          <p>{recommendation.Description}</p>
        </div>
      ))}

    

    </>
  );
}

export default Recommendation;
