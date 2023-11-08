import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../components/axios";
import { Link } from "react-router-dom";

function Message() {
  // const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
  // const userEmail = localStorage.getItem("userEmail");
  const userEmail = "i@gmail.com";
  const [apiResponse, setApiResponse] = useState([]);
  const [userNameMap, setUserNameMap] = useState({});
  const [userMessages, setUserMessages] = useState({});
  const [selectedUser, setSelectedUser] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");

  const fetchChats = async () => {
    const formData = new URLSearchParams();
    formData.append("email", userEmail);

    const response = await axios.post("/getChat.php", formData);
    if (response.data.success) {
      setApiResponse(response.data.data);
    }
  };

  const fetchUserNames = async () => {
    try {
      const response = await axios.get("/getUserName.php");

      if (response.data.success) {
        const newUserNameMap = {};
        response.data.data.forEach((user) => {
          newUserNameMap[user.email] = user.name;
          if (!userMessages[user.email]) {
            setUserMessages((prev) => ({ ...prev, [user.email]: [] }));
          }
        });
        setUserNameMap(newUserNameMap);
      }
    } catch (error) {
      console.error("Error fetching user names:", error);
    }
  };

  useEffect(() => {
    fetchChats();
    fetchUserNames();

    const intervalId = setInterval(() => {
      fetchChats();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const initialMessages = {};
    Object.keys(userNameMap).forEach((email) => {
      initialMessages[email] = [];
    });

    // Populate messages based on apiResponse
    apiResponse.forEach((messageObj) => {
      const { SenderEmail, ReceiverEmail, Message } = messageObj;
      const direction = SenderEmail === userEmail ? "right" : "left";
      const user = direction === "right" ? ReceiverEmail : SenderEmail;

      if (!initialMessages[user]) {
        initialMessages[user] = [];
      }

      initialMessages[user].push({
        direction,
        text: Message,
      });
    });

    setUserMessages(initialMessages);
  }, [apiResponse, userNameMap]);

  const handleSendMessage = async () => {
    if (currentMessage.trim() !== "") {
      // Prepare form data
      const formData = new URLSearchParams();
      formData.append("SenderEmail", userEmail);
      formData.append("ReceiverEmail", selectedUser);
      formData.append("Message", currentMessage);

      // Make API call to sendMessage.php
      try {
        const response = await axios.post("/sendMessage.php", formData);
        if (response.data.success) {
          // Update UI after successful message sending
          setUserMessages((prev) => ({
            ...prev,
            [selectedUser]: [
              ...(prev[selectedUser] || []),
              { direction: "right", text: currentMessage },
            ],
          }));
          setCurrentMessage("");
        } else {
          console.error("Error sending message:", response.data.message);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleUserSelection = (newUserEmail) => {
    // Initialize an empty message array for the new user if not present
    setUserMessages((prevUserMessages) => {
      if (!prevUserMessages[newUserEmail]) {
        return { ...prevUserMessages, [newUserEmail]: [] };
      }
      return prevUserMessages;
    });

    // Set the new user as the selected user
    setSelectedUser(newUserEmail);
  };

  const styles = {
    container: {
      display: "flex",
      width: "100%",
      height: "500px",
    },
    sidebar: {
      flex: "1",
      borderRight: "1px solid #ccc",
      padding: "20px",
      height: "100%",
      overflowY: "auto",
      backgroundColor: "#f6f6f6",
    },
    chatBox: {
      flex: "3",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px",
      height: "100%",
      backgroundColor: "#fff",
    },
    chatList: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: "10px 5px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
    },
    leftMessage: {
      maxWidth: "60%",
      padding: "10px 15px",
      borderRadius: "15px 15px 15px 0",
      backgroundColor: "#e5e5e5",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      marginBottom: "15px",
      alignSelf: "flex-start",
    },
    rightMessage: {
      maxWidth: "60%",
      padding: "10px 15px",
      borderRadius: "15px 15px 0 15px",
      backgroundColor: "#00aaff",
      color: "white",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      marginBottom: "15px",
      alignSelf: "flex-end",
    },
    chatInput: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderTop: "1px solid #ccc",
    },
    input: {
      padding: "10px",
      borderRadius: "15px",
      border: "1px solid #ccc",
      flex: "1",
      marginRight: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#00aaff",
      color: "white",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>Chats</h2>
        <ul style={styles.chatList}>
          {Object.keys(userMessages).map((email, index) => (
            <li key={index} style={styles.listItem}>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleUserSelection(email);
                }}
              >
                {userNameMap[email] || email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.chatBox}>
        <div>
          <h2>{userNameMap[selectedUser] || selectedUser}</h2>
        </div>
        <div>
          {userMessages[selectedUser]?.map((message, index) => (
            <div
              key={index}
              style={
                message.direction === "left"
                  ? styles.leftMessage
                  : styles.rightMessage
              }
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div style={styles.chatInput}>
          <input
            style={styles.input}
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button style={styles.button} onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
