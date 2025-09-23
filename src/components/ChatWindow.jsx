import { useState } from "react";
import Message from "./Message";

export default function ChatWindow({ user }) {
  const [messages, setMessages] = useState([
    { sender: "Mann", text: "Hey team!", time: "08:15 PM" },
    { sender: "Vikram", text: "What's up?", time: "08:16 PM" },
    { sender: "You", text: "All good, working on UI!", time: "08:17 PM" },
  ]);

  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([
      ...messages,
      {
        sender: user,
        text: newMsg,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setNewMsg("");
  };

  return (
    <div className="chat-window">
      <div className="chat-header">Daily Chat Group</div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <Message
            key={i}
            sender={msg.sender}
            text={msg.text}
            time={msg.time}
            isOwn={msg.sender === user}
          />
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
