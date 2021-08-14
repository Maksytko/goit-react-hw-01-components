import style from "./Friend-list.module.css";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li className={style.item} key={friend.id}>
            <span
              className={style.status}
              style={{ color: friend.isOnline ? "green" : "red" }}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
