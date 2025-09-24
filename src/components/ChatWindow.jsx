import { useState, useEffect, useRef } from "react";
import Message from "./Message";

export default function ChatWindow({ user }) {
  const [groupName, setGroupName] = useState("Daily Chat Group");
  const [messages, setMessages] = useState([
    { sender: "Mann", text: "Hey team!", time: "08:15 PM" },
    { sender: "Vikram", text: "What's up?", time: "08:16 PM" },
    { sender: "You", text: "All good, working on UI!", time: "08:17 PM" },
  ]);

  const [newMsg, setNewMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const messagesEndRef = useRef(null);

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
    setIsTyping(false);
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`chat-window ${darkMode ? "dark" : ""}`}>
      <div className="chat-header">
  <div className="header-left">
    <div className="group-name">Daily Chat Group</div>
    <div className="member-count">4 members</div>
  </div>
  <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "☀️" : "🌙"}
  </button>
</div>



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
        {isTyping && <div className="typing-indicator">Someone is typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
  <label htmlFor="file-upload" className="upload-btn">📎</label>
  <input
    id="file-upload"
    type="file"
    style={{ display: "none" }}
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        setMessages([
          ...messages,
          {
            sender: user,
            text: `📎 ${file.name}`,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }
    }}
  />
  <input
    type="text"
    placeholder="Type a message..."
    value={newMsg}
    onChange={(e) => {
      setNewMsg(e.target.value);
      setIsTyping(true);
    }}
    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
  />
  <button onClick={sendMessage}>Send</button>
</div>

    </div>
  );
}