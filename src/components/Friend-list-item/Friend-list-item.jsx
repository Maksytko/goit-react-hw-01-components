import style from "./Friend-list-item.module.css";

function FriendListItem({ friends }) {
  return friends.map((friend) => {
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
  });
}

export default FriendListItem;
