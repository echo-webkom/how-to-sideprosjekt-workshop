"use client";

import NavBar from "@/app/FrontPage/NavBar";
import { useState } from "react";

export default function Haskell_Is_Hard() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user message": message }),
      });
      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      alert("Error communicating with API");
    }
  };

  return (
    <div className="page">
      <NavBar />

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p>Chatbot response: {response}</p>
    </div>
  );
}
