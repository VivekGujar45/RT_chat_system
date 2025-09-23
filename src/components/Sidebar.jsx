export default function Sidebar({ friends, activeFriend, setActiveFriend }) {
  return (
    <div className="sidebar">
      <h2>Friends Group</h2>
      <ul>
        {friends.map((friend, i) => (
          <li
            key={i}
            className={activeFriend === friend.name ? "active" : ""}
            onClick={() => setActiveFriend(friend.name)}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "#444",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              {friend.name.charAt(0)}
            </div>
            <span className="status-dot" style={{ background: friend.online ? "green" : "gray" }} />
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
