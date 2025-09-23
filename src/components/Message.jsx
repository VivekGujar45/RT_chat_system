import { useState } from "react";

export default function Message({ sender, text, time, isOwn }) {
  const [showReactions, setShowReactions] = useState(false);
  const [reaction, setReaction] = useState(null);
  const [seen, setSeen] = useState(isOwn); // Only for "You"

  const reactions = ["👍", "❤️", "😂", "😮", "😢"];

  return (
    <div
      className={`message ${isOwn ? "sent" : "received"}`}
      onMouseEnter={() => setShowReactions(true)}
      onMouseLeave={() => setShowReactions(false)}
    >
      <div className="message-bubble">
        <span>{text}</span>
        <div className="message-meta">
          <span className="time">{time}</span>
          {isOwn && (
            <span className={`tick ${seen ? "seen" : ""}`}>
              ✓✓
            </span>
          )}
        </div>
      </div>

      {reaction && <div className="reaction-tag">{reaction}</div>}

      {showReactions && (
        <div className="reaction-picker">
          {reactions.map((r, i) => (
            <span key={i} onClick={() => setReaction(r)}>
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
