export default function Message({ sender, text, time, isOwn }) {
  return (
    <div className={`message ${isOwn ? "sent" : "received"}`}>
      {!isOwn && <strong>{sender}</strong>}
      <p>{text}</p>
      <span className="time">{time}</span>
    </div>
  );
}
