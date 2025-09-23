export default function Sidebar({ friends }) {
  return (
    <div className="sidebar">
      <h2>Friends Group</h2>
      <ul>
        {friends.map((friend, i) => (
          <li key={i}>
            <span
              className="status-dot"
              style={{ backgroundColor: friend.online ? "green" : "gray" }}
            ></span>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
