// src/components/ChatComponent.js
import { useEffect, useState } from "react";
import echo from "../lib/echo";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const channel = echo.channel("payment-processed");
    channel.listen(".payment-processed", (event) => {
      setMessages((prevMessages) => [...prevMessages, JSON.stringify(event)]);
    });
  }, []);

  return (
    <div>
      <h1>Chat Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatComponent;
